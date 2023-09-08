import dbObj from "@/libs/mongo";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { Collection, Db, ObjectId } from 'mongodb';



export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { dbProm } = dbObj;
        const userCollection: Collection = (await dbProm).collection('user');
        const resp = await userCollection.findOne({ username: credentials?.username, password: credentials?.password });
        
  
        if (resp?._id) {
          // Any object returned will be saved in `user` property of the JWT
          const user = { id: resp._id.toString(), name: credentials?.username, email: credentials?.username }
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],
  adapter: MongoDBAdapter(dbObj.clientProm),
  session: {
    strategy: "jwt"
  }
}

export default NextAuth(authOptions)
"use client";
import { AuthProvider } from "@pangeacyber/react-auth";

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import { SessionProvider } from "next-auth/react"
import Head from 'next/head'

export default function App({
  Component,
  pageProps: { session, ...pageProps } }: AppProps) {
  const hostedLoginURL = process?.env?.NEXT_PUBLIC_AUTHN_HOSTED_LOGIN_URL || "";
  const authConfig = {
    clientToken: process?.env?.NEXT_PUBLIC_AUTHN_CLIENT_TOKEN || "",
    domain: process?.env?.NEXT_PUBLIC_PANGEA_DOMAIN || "",
  };
  return (
    // <SessionProvider session={session}>
    <AuthProvider loginUrl={hostedLoginURL} config={authConfig}>
    <>
      <Head>
        <title>MedPak Analytics</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
    </AuthProvider>
    // </SessionProvider>
  )
}

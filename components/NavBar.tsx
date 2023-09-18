import { useAuth } from "@pangeacyber/react-auth";

import Link from "next/link";
import React from "react";
import RandomAvatar from "./RandomAvatars";

function AuthenticatedDropdown() {
    const {
        logout,
    } = useAuth();
    return (
        <>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a className="justify-between">
                        Profile
                        {/* <span className="badge">New</span> */}
                    </a>
                </li>
                {/* <li><a>Settings</a></li> */}
                <li><a onClick={(e) => logout()}>Logout</a></li>
            </ul>
        </>
    )
}

function UnauthenticatedDropdown() {
    const {
        login
    } = useAuth();
    return (
        <>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a onClick={(e) => login()}>Login</a></li>
                <li><Link href={"/signup"}>Signup</Link></li>
            </ul>
        </>
    )
}

function NavBar() {
    const {
        authenticated,
        loading,
        error,
        user,
        client,
        login,
        logout,
        getToken,
    } = useAuth();

    return (
        <>
            <div className="navbar bg-base-100 self-start">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        </ul>
                    </div>
                    <Link href={"/"} className="btn btn-ghost normal-case text-xl">MedPak Analytics</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* {
                          session ? (
                              <> */}

                        {/* </>
                          ) : null
                      } */}

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <RandomAvatar />

                            </div>
                        </label>
                        {
                            authenticated ? <AuthenticatedDropdown /> : <UnauthenticatedDropdown />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar

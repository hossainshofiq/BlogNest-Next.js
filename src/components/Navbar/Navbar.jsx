"use client"

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const { data: session, status } = useSession();
    // console.log(session); 

    const navLinks = <>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/about"}>About</Link></li>
        <li><a>Item 3</a></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">BlogNest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    status == "authenticated" ? <>
                        <Image 
                        src={session?.user?.image} 
                        height={40} 
                        width={40} 
                        alt='User-Profile'
                        className='rounded-full border border-black'></Image>
                        <button onClick={() => signOut()} className='btn'>Sign Out</button>
                    </> : <>
                        <Link href={"/signin"} className="btn">Sign In</Link>
                        <Link href={"/signup"} className="btn">Sign Up</Link>
                    </>
                }

            </div>
        </div>
    );
};

export default Navbar;
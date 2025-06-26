"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  const [showdropdown, setShowdropdown] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-xl shadow-white text-white flex justify-between items-center px-4 md:h-16">
      <Link
        className="logo font-bold text-lg flex justify-center items-center"
        href={"/"}
      >
        <img className="invertImg" src="tea.gif" width={44} alt="" />
        <span className="text-xl md:text-base my-3 md:my-0">
          Get Me a Chai!
        </span>
      </Link>

      <div>
        {session ? (
          <>
            <span className="mr-4">Signed in as {session.user.email}</span>
            <button
              onClick={() => signOut()}
              className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700"
            >
              Sign out
            </button>
          </>
        ) : (
          <Link href={"/Login"}>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
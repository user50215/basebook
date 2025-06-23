"use client"

import Link from "next/link"
import React, { useState } from "react"

const Header = () => {
  const [signedIn, setSignedIn] = useState(false)
  return (
    <div className="flex flex-wrap bg-white p-8 items-center justify-between">
      <div className="text-3xl font-bold">🅱️asebook</div>
      <div className="flex gap-20 mr-40">
        <Link href={"/"}>
          <div className="text-2xl font-bold">Home</div>
        </Link>
        {signedIn ? (
          <div className="flex gap-20 text-2xl font-bold">
            <Link href={"/my-account"}>
              <div>My account</div>
            </Link>
            <div
              className="hover:cursor-pointer"
              onClick={() => {
                setSignedIn(!signedIn)
              }}
            >
              Sign Out
            </div>
          </div>
        ) : (
          <div className="flex gap-20">
            <Link href={"/sign-in"}>
              <div
                className="text-2xl font-bold"
                onClick={() => {
                  setSignedIn(!signedIn)
                }}
              >
                Sign in
              </div>
            </Link>
            <Link href={"/sign-up"}>
              <div className="text-2xl font-bold">Sign up</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header

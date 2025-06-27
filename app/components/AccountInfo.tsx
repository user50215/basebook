"use client"

import { useAuth } from "@clerk/nextjs"
import React, { useEffect, useState } from "react"

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
}
const AccountInfo = () => {
  const { userId } = useAuth()
  const [user, setUser] = useState<User | null>(null)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/fetchUser?userId=${userId}`)
      if (response.ok) {
        const data: User = await response.json()
        setUser(data)
        console.log(data)
      } else {
        alert("Failed to load user")
      }
    }
    fetchUser()
  }, [userId])
  return (
    <div className="flex gap-2 flex-col p-8 bg-white font-bold">
      <div className="border-b-2 p-2 text-2xl">
        Account information for {user?.firstName} {user?.lastName}
      </div>
      <div className="mt-2">You can change your name here</div>
      <div className="flex items-center justify-center">
        First name:&nbsp;&nbsp;
        <input
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value)
          }}
          type="text"
          className="border-2"
          placeholder={user?.firstName}
        ></input>
      </div>
      <div className="flex items-center justify-center">
        Last name:&nbsp;&nbsp;
        <input
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value)
          }}
          type="text"
          className="border-2"
          placeholder={user?.lastName}
        ></input>
      </div>
      <button
        onClick={async () => {
          await fetch("/api/updateAccount", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ firstName, lastName }),
          })
          alert("Reload to see the changes!")
        }}
        className="bg-gray-100 p-2 hover:cursor-pointer hover:bg-gray-200"
      >
        Click here to submit changes!
      </button>
    </div>
  )
}

export default AccountInfo

import { auth, currentUser } from "@clerk/nextjs/server"
import { PrismaClient } from "../../../generated/prisma"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const user = await currentUser()
  const primaryEmail = user?.emailAddresses.find(
    (email) => email.id === user.primaryEmailAddressId
  )?.emailAddress
  console.log(primaryEmail)
  const newUser = await prisma.user.create({
    data: {
      id: userId,
      email: primaryEmail || "",
      firstName: "placeholder",
      lastName: "placeholder",
    },
  })

  return NextResponse.json(newUser, { status: 201 })
}

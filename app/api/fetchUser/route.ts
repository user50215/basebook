import { PrismaClient } from "../../../generated/prisma"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

// It expects a 'userId' query parameter in the URL (e.g., /api/user?userId=123)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")
  if (!userId) {
    return NextResponse.json({ error: "User ID is required." }, { status: 400 })
  }
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })
  return NextResponse.json(user, { status: 200 })
}

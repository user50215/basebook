import { PrismaClient } from "../../../generated/prisma"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url) 
  const type = searchParams.get("type")
  const allPosts = await prisma.post.findMany()
  return NextResponse.json(allPosts, { status: 200 })
}

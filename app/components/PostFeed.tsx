"use client"

import React, { useEffect, useState } from "react"
import Post from "./Post"

interface Post {
  id: string
  title: string
  content: string
  createdAt: string
  author: {
    id: string
  }
  userId: string
  likes: number
  comments: number
}

const PostFeed = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts") // Call your GET API route
      if (response.ok) {
        const data: Post[] = await response.json()
        setPosts(data.reverse())
      } else {
        alert("Failed to load posts")
      }
    }
    fetchPosts()
  }, []) // Empty dependency array means this runs once on mount
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="text-3xl font-bold">Posts</div>
      <div className="flex flex-col gap-5">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            createdAt={post.createdAt}
            userId={post.userId}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </div>
    </div>
  )
}

export default PostFeed

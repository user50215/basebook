import React from "react"
import Header from "../components/Header"
import AccountInfo from "../components/AccountInfo"
import PostFeed from "../components/PostFeed"

// Here user can change their prof pic, name, and see all their posts
const page = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex justify-center p-8 gap-20 ">
        <div >
          <AccountInfo />
        </div>
        {/* change so it only shows posts from user */}
        <PostFeed />
        {/* put friend requests here */}
        <div >
          <AccountInfo />
        </div>
      </div>
    </div>
  )
}

export default page

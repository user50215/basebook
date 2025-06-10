import CreatePost from "./components/CreatePost"
import Header from "./components/Header"
import PostFeed from "./components/PostFeed"

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="center-menu flex flex-col items-center justify-center gap-15 mt-20">
        <CreatePost></CreatePost>
        <PostFeed></PostFeed>
      </div>
    </div>
  )
}

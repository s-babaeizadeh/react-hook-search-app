import React, { useState, useEffect } from "react"

const Posts = ({ searchItem }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://www.reddit.com/r/${searchItem}.json`)

      const json = await res.json()

      setPosts(json.data.children.map((item) => item.data))
    }

    fetchData()
  }, [searchItem, setPosts])

  if (!posts) {
    alert("Data is not available")
  }

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Posts

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = ({ searchItem }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://www.reddit.com/r/${searchItem}.json`
        );

        setPosts(res.data.data.children.map((item) => item.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [searchItem, setPosts]);

  if (!posts) {
    alert('Data is not available');
  }

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;

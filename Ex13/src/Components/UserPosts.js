import React, { useEffect, useState } from "react";

function UserPosts({ userId = 1 }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    }
    fetchData();
  }, [userId]);

  if (loading) return <p>Loading posts...</p>;

  return (
    <div>
      <h3>User Posts</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default UserPosts;

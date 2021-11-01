import React, { useState, useEffect } from "react";

import SinglePost from "./SinglePost";
//import Create from "./Create";

function Posts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts"
      );

      const responseObj = await response.json();

      setPosts(responseObj.data.posts);
    }
    console.log(posts);
    getPosts();
  }, [posts]);

  const postsToRender = posts.map((post) => {
    return <SinglePost post={post} />;
  });

  return (
    <div>
      <h1>Posts:</h1>
      {postsToRender}
    </div>
  );
}

export default Posts;

//const Post = (props) => {
//const [posts, setPosts] = useState([]);

//useEffect(() => {
//const fetchPost = async () => {
//const resp = await fetch(
//   "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts"
//);
//const data = await resp.json();
// you may want to check where the posts are in this data object by console logging data
//setPosts(data);
//};
//fetchPost();
//}, []);

//return (
//<div>
//<h1>Posts</h1>
//</div>
//);

// return (

//   <>
//   <div className="post">
//     <h1>Post</h1>
//   </div>

//   {
//     post.map((post) => (
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <div>{post.body}</div>
//     </div>)

//     }
// </>

// )
//};

//export default Post;

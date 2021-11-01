import React from "react";
import { useState } from "react";
const Create = ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const addPost = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application-json",
          Authorization: "Bearer TOKEN_STRING_HERE",
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            location,
            willDeliver: willDeliver,
          },
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    setTitle("");
    setDescription("");
    setPrice("");
    setLocation("");
    setWillDeliver(false);
  };
  return (
    <>
      <h1>Create A New Post:</h1>
      <div id="create-post">
        <form id="add-post-form" onSubmit={addPost}>
          <textarea
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="title"
            required
          ></textarea>
          <br />
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="description"
            required
          ></textarea>
          <br />
          <textarea
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="price"
            required
          ></textarea>
          <textarea
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="location"
          ></textarea>
          <br />
          <span id="checkbox">Willing to deliver?</span>
          <input
            type="checkbox"
            value={willDeliver}
            onChange={(event) => {
              setWillDeliver(true);
            }}
            id="delivery"
          ></input>
          <br />
          <button id="create-post-button" type="submit">
            Create Post
          </button>
        </form>
      </div>
    </>
  );
};
export default Create;

///import React, { useState } from "react";

//function Posts(props) {
//    const [posts, setPosts] = useState([]);
//  const Create = ({ posts, setPosts }) => {
//    const [title, setTitle] = useState([]);
//    const [body, setBody] = useState([]);

//    const handleSubmit = async (ev) => {
//     ev.preventDefault();
//      const response = await fetch(
//        "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer TOKEN_STRING_HERE",
//         },
//         body: JSON.stringify({
//           title,
//            body,
//desription,
//price,
//willDeliver,

//         }
//         }),
//       }
//     );

//     const data = await response.json();
//      console.log("data:", data);
//     setPost([data, ...posts]);
//     setTitle("");
//     setBody("");
//   };

//return (
//  <form onSubmit={handleSubmit}>
//    <input
//      placeholder="title"
//      type="text"
//     value={title}
//      onChange={(e) => setTitle(e.target.value)}
//    />
//    <input
//     placeholder="body"
//     type="text"
//     value={body}
//      onChange={(e) => setBody(e.target.value)}
//    />
//    <button type="submit">Submit</button>
// </form>
//);
//};

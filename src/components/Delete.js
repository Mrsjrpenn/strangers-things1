import React from "react";
const Delete = ({ token, id, fetchPosts }) => {
  const handleDelete = async () => {
    const response = await fetch(
      `https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application-json",
        },
      }
    );
    console.log(response);
    fetchPosts();
  };

  return (
    <button id="delete-button" onClick={handleDelete}>
      DELETE
    </button>
  );
};
export default Delete;

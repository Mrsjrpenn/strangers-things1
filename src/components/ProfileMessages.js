import React, { useState } from "react";
const ProfileMessages = ({ token, postId }) => {
  const [message, setMessage] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const reponse = await fetch(
      `https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts/5e8929ddd439160017553e06/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: {
            content: message,
          },
        }),
      }
    );

    const { data } = await reponse.json();
    console.log(data);
    setMessage("");
  };

  return (
    <>
      <h1>Profile Messages:</h1>
      <form onSubmit={onSubmit} id="send-message-form">
        <textarea
          id="text"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          placeholder="Type message to seller here"
        ></textarea>
        <br />
        <button type="submit" id="send-message-button">
          {" "}
          SEND MESSAGE
        </button>
      </form>
    </>
  );
};

export default ProfileMessages;

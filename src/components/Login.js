import React, { useState } from "react";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(event) {
    setUsername(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application-json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      }
    );
    const parsedResponse = await response.json();
    console.log(parsedResponse);
  }

  return (
    <>
      <h1>Login into your account:</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          value={username}
          onChange={handleUsername}
        />
        <input
          placeholder="password"
          type="text"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;

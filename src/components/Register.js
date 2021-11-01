import React, { useState } from "react";

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsername(event) {
    setUsername(event.target.value);
    console.log(username);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/users/register",
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
    const token = parsedResponse.data.token;

    window.localStorage.setItem("token", token);
    // we want to get the token out of this data object and store it in local storage
  }

  return (
    <>
      <h1>Register for a new account here:</h1>
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

export default Register;

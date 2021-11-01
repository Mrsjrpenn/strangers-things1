import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div id="navbar">
      <h1>Stranger's Things</h1>
      <Link to="/home"> Home </Link>
      <Link to="/posts"> Posts </Link>
      <Link to="/singlepost"> SinglePost </Link>
      <Link to="/create"> Create </Link>
      <Link to="/delete"> Delete </Link>
      <Link to="/profile"> Profile </Link>
      <Link to="/profilemessages"> ProfileMessages </Link>
      <Link to="/login"> Login </Link>
      <Link to="/register"> Register </Link>
    </div>
  );
}
export default Nav;

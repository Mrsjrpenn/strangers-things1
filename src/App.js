import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import SinglePost from "./components/SinglePost";
import ProfileMessages from "./components/ProfileMessages";
import Create from "./components/Create";
import Delete from "./components/Delete";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div id="container">
          <div id="main-section">
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/posts">
                <Posts />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/singlepost">
                <SinglePost />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/profilemessages">
                <ProfileMessages />
              </Route>
              <Route path="/delete">
                <Delete />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

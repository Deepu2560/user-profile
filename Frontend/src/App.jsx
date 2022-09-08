import React from "react";
import "./App.css";
import { useSelector } from "react-redux";

import { Allroutes } from "./Components/router";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function App() {
  // gettin isAuth from redux it is a boolean value
  const { isAuth } = useSelector((state) => state.login);

  // useNavigate hook to navigate to different pages
  const navigate = useNavigate();

  // checing if isAuth is true then navigate to user profile page else login page
  useEffect(() => {
    if (isAuth == true) {
      navigate("/user");
    } else navigate("/");
  }, [isAuth]);

  // returning pages as per routes
  return (
    <div className="App">
      <Allroutes />
    </div>
  );
}

export default App;

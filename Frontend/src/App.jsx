import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Allroutes } from "./Components/router";
import { useEffect } from "react";
import { useNavigate } from "react-router";

import { handleUserData } from "./Components/Redux/User/userData/userDataAction";
import "./App.css";

function App() {
  // gettin isAuth from redux it is a boolean value
  const { isAuth, token } = useSelector((state) => state.login);

  // useNavigate hook to navigate to different pages and dispatch to use redux action functions
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // checing if isAuth is true then navigate to user profile page else login page
  useEffect(() => {
    if (isAuth == true) {
      dispatch(handleUserData(dispatch, token));
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

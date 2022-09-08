import React, { useState } from "react";
import "./loginpage.css";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { handlelogin } from "../../Redux/Auth/login/loginAction";

export const Authpage = () => {
  // useNavigate hook to navigate to different routes
  const navigate = useNavigate();

  // dispatch for using redux
  const dispatch = useDispatch();

  // Log in form sample data
  const logInSample = {
    email: "",
    password: "",
  };

  // Log in input value
  const [logInData, setlogInData] = useState(logInSample);

  // handle change of input element
  const handleChange = ({ name, value }) => {
    setlogInData((prev) => ({ ...prev, [name]: value }));
  };

  // submitting login
  const submitLogin = () => {
    dispatch(handlelogin(dispatch, logInData));
  };
  // taking input from logIn data and setting default value
  const { email, password } = logInData;

  // main html page
  return (
    <div id="login">
      <div id="login-main-div">
        <div>
          <h1>Log in</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="login-form-label">
                Email Address
              </Form.Label>
              <Form.Control
                defaultValue={email}
                name="email"
                onChange={({ target }) => handleChange(target)}
                type="email"
                className="login-form-input"
                placeholder="Enter email address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="login-form-label">Password</Form.Label>
              <Form.Control
                defaultValue={password}
                name="password"
                onChange={({ target }) => handleChange(target)}
                type="password"
                className="login-form-input"
                placeholder="Enter password"
              />
            </Form.Group>
            <p id="page-navigate" onClick={() => navigate("/signup")}>
              Don't have account
            </p>
            <Button onClick={() => submitLogin()} id="login-button">
              Log In
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

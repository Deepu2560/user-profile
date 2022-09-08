import React, { useState } from "react";
import "./loginpage.css";
import { Form, Button } from "react-bootstrap";

export const Authpage = () => {
  // Log in form sample data
  const logInSample = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
  };

  // Log in input value
  const [logInData, setlogInData] = useState(logInSample);

  // handle change of input element
  const handleChange = ({ name, value }) => {
    setlogInData((prev) => ({ ...prev, [name]: value }));
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
                type="email"
                className="login-form-input"
                placeholder="Enter email address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="login-form-label">Password</Form.Label>
              <Form.Control
                type="password"
                className="login-form-input"
                placeholder="Enter password"
              />
            </Form.Group>

            <Button id="login-button">Log In</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

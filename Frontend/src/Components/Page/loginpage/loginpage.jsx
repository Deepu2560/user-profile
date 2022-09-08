import React from "react";
import "./loginpage.css";
import { Form, Button } from "react-bootstrap";

export const Authpage = () => {
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

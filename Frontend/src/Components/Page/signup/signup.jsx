import React from "react";
import "./signup.css";
import { Form, Button } from "react-bootstrap";

export const SignupPage = () => {
  return (
    <div id="signup">
      <div id="signup-main-form">
        <div>
          <h1>Sign Up</h1>
          <Form>
            <div id="user-fullName">
              <Form.Group>
                <Form.Label className="signup-form-label">
                  First Name
                </Form.Label>
                <Form.Control
                  className="signup-form-input"
                  type="text"
                  placeholder="Enter First name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="signup-form-label">Last Name</Form.Label>
                <Form.Control
                  className="signup-form-input"
                  type="text"
                  placeholder="Enter last name"
                />
              </Form.Group>
            </div>
            <Form.Group>
              <Form.Label className="signup-form-label">
                Email Address
              </Form.Label>
              <Form.Control
                className="signup-form-input"
                type="email"
                placeholder="Enter email address"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="signup-form-label">
                Mobile Number
              </Form.Label>
              <br />
              <input
                className="signup-form-input"
                type="number"
                placeholder="Enter mobile number"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="signup-form-label">Bio</Form.Label>
              <Form.Control
                className="signup-form-input"
                type="text"
                placeholder="Enter bio"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="signup-form-label">Password</Form.Label>
              <Form.Control
                className="signup-form-input"
                type="password"
                placeholder="Enter password"
              />
            </Form.Group>
            <Button id="signup-form-button">Signup</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

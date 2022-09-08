import React, { useState } from "react";
import "./signup.css";
import { Form, Button } from "react-bootstrap";

export const SignupPage = () => {
  // sign Up form sample data
  const signUpSample = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
  };

  // sign up input value
  const [signupData, setSignupData] = useState(signUpSample);

  // handle change of input element
  const handleChange = ({ name, value }) => {
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  // taking input from signUp data and setting default value
  const { firstName, lastName, email, phone, password, bio } = signupData;

  // main html page
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
                  defaultValue={firstName}
                  name="firstName"
                  onChange={({ target }) => handleChange(target)}
                  className="signup-form-input"
                  type="text"
                  placeholder="Enter First name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="signup-form-label">Last Name</Form.Label>
                <Form.Control
                  defaultValue={lastName}
                  name="lastName"
                  onChange={({ target }) => handleChange(target)}
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
                defaultValue={email}
                name="email"
                onChange={({ target }) => handleChange(target)}
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
              <Form.Control
                defaultValue={phone}
                name="phone"
                onChange={({ target }) => handleChange(target)}
                className="signup-form-input"
                type="text"
                placeholder="Enter mobile number"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="signup-form-label">Bio</Form.Label>
              <Form.Control
                defaultValue={bio}
                name="bio"
                onChange={({ target }) => handleChange(target)}
                className="signup-form-input"
                type="text"
                placeholder="Enter bio"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="signup-form-label">Password</Form.Label>
              <Form.Control
                defaultValue={password}
                name="password"
                onChange={({ target }) => handleChange(target)}
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

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

import { handleUserEdit } from "../../Redux/Auth/login/loginAction";

export const UserEditPage = () => {
  // useNavigate hook to navigate to different routes
  const navigate = useNavigate();

  // dispatch for using redux
  const dispatch = useDispatch();

  // user data state variable
  const [userData, setUserData] = useState(null);

  // getting user data from token provided in redux
  const { token } = useSelector((state) => state.login);

  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/user/details", {
        headers: {
          authorization: token,
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
      let userSampleData = { firstName: data.firstName, lastName: data.lastName, email: data.email, phone: data.phone, bio: data.bio };
      
        setUserData(() => userSampleData);
      });
  }, [token]);

  // handling userdata changes from input boxes
  const handleChange = ({ name, value }) => {
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // handing submit for user edit
  const submitUserEdit = () => {
    dispatch(handleUserEdit(dispatch, userData, token));
  };

  // showing edit form else showing loading text
  if (userData) {
    // taking input from signUp data and setting default value
    const { firstName, lastName, email, phone, bio } = userData;
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
                  <Form.Label className="signup-form-label">
                    Last Name
                  </Form.Label>
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
              <Button onClick={() => submitUserEdit()} id="signup-form-button">
                Edit
              </Button>
              <br />
              <Button onClick={() => navigate("/user")} id="signup-form-button">
                Back
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
};

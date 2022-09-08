import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./userProfile.css";

export const UserProfilePage = () => {
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
        setUserData(() => data.user);
      });
  }, [token]);

  // if user we gets user data then main page will be displayed else loading is displayed
  if (userData) {
    return (
      <div className="user-profile">
        <div id="user-data">
          <h1>User Details</h1>
          <div>
            <p>
              <strong>First Name :-</strong> {userData.firstName}
            </p>
            <p>
              <strong>Last Name :-</strong> {userData.lastName}
            </p>
            <p>
              <strong>Email :-</strong> {userData.email}
            </p>
            <p>
              <strong>Phone number :-</strong> {userData.phone}
            </p>
            <p>
              <strong>Bio :-</strong> {userData.bio}
            </p>
          </div>
          <button>EDIT</button>
        </div>
        <div id="avtar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="currentColor"
            className="bi bi-person-bounding-box"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          </svg>
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

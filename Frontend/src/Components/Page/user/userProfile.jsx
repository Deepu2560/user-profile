import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { logoutSuccess } from "../../Redux/Auth/login/loginAction";
import "./userProfile.css";

export const UserProfilePage = () => {
  // useNavigate hook to navigate to different route and dispatch to access redux reducer methods
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Getting userData from userProfile reducer
  const { userData, isSuccess } = useSelector((state) => state.userProfile);

  // if user we gets user data then main page will be displayed else loading is displayed
  if (isSuccess) {
    return (
      <div className="user-profile">
        <div id="user-left-details">
          <div>
            <div
              className="interests-main-div"
              style={{
                background: "linear-gradient(to Bottom, #fff95b, #ff930f)",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/4661/4661316.png"
                alt="Profession avatar"
              />
              <h3>UX design</h3>
              <p>5 Projects</p>
              <button>View All</button>
            </div>
            <div
              className="interests-main-div"
              style={{
                background: "linear-gradient(to Bottom, #ffc8c8, #ff5858)",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2383/2383605.png"
                alt="Profession avatar"
              />
              <h3>Photoshop</h3>
              <p>3 Projects</p>
              <button>View All</button>
            </div>
            <div
              className="interests-main-div"
              style={{
                background: "linear-gradient(to Bottom, #ebf4f5, #b5c6e0)",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2409/2409387.png"
                alt="Profession avatar"
              />
              <h3>Development</h3>
              <p>2 Projects</p>
              <button>View All</button>
            </div>
          </div>
          <div>
            <div id="user-fams">
              <img
                src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Your cover photo"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <div>
                  <p style={{ margin: 0 }}>2.5K</p>
                  <strong style={{ margin: 0 }}>Follower</strong>
                </div>
                <div>
                  <p style={{ margin: 0 }}>21</p>
                  <strong style={{ margin: 0 }}>Clients</strong>
                </div>
              </div>
            </div>
            <div id="today-task">
              <h2 style={{ fontWeight: "bold", marginBottom: "25px" }}>
                Today
              </h2>
              <div className="today-event">
                <div>
                  <div>
                    <p style={{ margin: 0 }}>12:35</p>
                    <strong style={{ margin: 0 }}>Wed</strong>
                  </div>
                  <div>
                    <strong>Mountain photo edit</strong>
                    <p>Photoshop</p>
                  </div>
                </div>
                <p>{">"}</p>
              </div>
              <div className="today-event">
                <div>
                  <div>
                    <p style={{ margin: 0 }}>12:35</p>
                    <strong style={{ margin: 0 }}>Wed</strong>
                  </div>
                  <div>
                    <strong>Mountain photo edit</strong>
                    <p>Photoshop</p>
                  </div>
                </div>
                <p>{">"}</p>
              </div>
            </div>
          </div>
        </div>
        <div id="user-data">
          <img
            src="https://images.unsplash.com/photo-1652881818518-bb5645be9ac3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="User avtar"
            id="avtar"
          />
          <div>
            <h1
              style={{ textAlign: "center" }}
            >{`${userData.firstName} ${userData.lastName}`}</h1>
            <p style={{ textAlign: "center", color: "#edede9" }}>
              {userData.bio}
            </p>
            <p style={{ textAlign: "center", color: "#90e0ef" }}>
              {userData.email}
            </p>
            <p style={{ textAlign: "center", color: "#90e0ef" }}>
              {userData.phone}
            </p>
          </div>
          <div id="user-detail-button">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person-x"
                viewBox="0 0 16 16"
              >
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                <path
                  fill-rule="evenodd"
                  d="M12.146 5.146a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
            <button onClick={() => navigate("/user/edit")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </button>
            <button onClick={() => dispatch(logoutSuccess())}>Log Out</button>
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

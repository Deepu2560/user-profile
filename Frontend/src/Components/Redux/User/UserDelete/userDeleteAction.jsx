import axios from "axios";

import { logoutSuccess } from "../../Auth/login/loginAction";

export const USER_DELETE_LOADING = "USER_DELETE_LOADING";
export const USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS";
export const USER_DELETE_ERROR = "USER_DELETE_ERROR";

export const userDeleteLoading = () => {
  {
    type: USER_DELETE_LOADING;
  }
};

export const userDeleteSuccess = () => {
  {
    type: USER_DELETE_SUCCESS;
  }
};

export const userDeleteError = () => {
  {
    type: USER_DELETE_ERROR;
  }
};

export const handleUserDelete = (dispatch, token) => {
  return function () {
    dispatch(userDeleteLoading());
    axios
      .delete("http://localhost:8080/auth/delete", {
        headers: {
          authorization: token,
        },
      })
      .then(({ data }) => {
        let { error, message } = data;

        if (error) {
          console.log(message);
          return dispatch(userDeleteError());
        }
        dispatch(userDeleteSuccess());
        return dispatch();
      })
      .catch((err) => {
        console.log("Error:", err);
        dispatch(userDeleteError());
      });
  };
};

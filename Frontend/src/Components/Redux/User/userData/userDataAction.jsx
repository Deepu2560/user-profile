import axios from "axios";

export const USER_DATA_LOADING = "USER_DATA_LOADING";
export const USER_DATA_SUCCESS = "USER_DATA_SUCCESS";
export const USER_DATA_ERROR = "USER_DATA_ERROR";

export const userDataLoading = () => ({ type: USER_DATA_LOADING });

export const userDataSuccess = (payload) => ({
  type: USER_DATA_SUCCESS,
  payload,
});

export const userDataError = () => ({ type: USER_DATA_ERROR });

export const handleUserData = (dispatch, token) => {
  return function () {
    dispatch(userDataLoading());
    axios
      .get("http://localhost:8080/auth/user/details", {
        headers: {
          authorization: token,
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        let { error, user, message } = data;

        if (error) {
          console.log(message);
          return dispatch(userDataError());
        }
        console.log(message);
        return dispatch(userDataSuccess(user));
      })
      .catch((error) => {
        console.log(error);
        return dispatch(userDataError());
      });
  };
};

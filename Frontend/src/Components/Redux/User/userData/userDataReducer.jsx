import {
  USER_DATA_ERROR,
  USER_DATA_LOADING,
  USER_DATA_SUCCESS,
} from "./userDataAction";

const initialStore = {
  isLoading: false,
  isSuccess: false,
  userData: null,
  isError: false,
};

export const UserReducer = (state = initialStore, { type, payload }) => {
  switch (type) {
    case USER_DATA_LOADING:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        userData: null,
        isError: false,
      };
    case USER_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        userData: payload,
        isError: false,
      };
    case USER_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        userData: null,
        isError: true,
      };
    default:
      return state;
  }
};

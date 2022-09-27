import {
  USER_DELETE_ERROR,
  USER_DELETE_LOADING,
  USER_DELETE_SUCCESS,
} from "./userDeleteAction";

const initialStore = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const UserDeleteRuducer = (state = initialStore, { type, payload }) => {
  switch (key) {
    case USER_DELETE_LOADING:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case USER_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
      };
    case USER_DELETE_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};

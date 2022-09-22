import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { LoginReducer } from "./Auth/login/loginReducer";
import { SignupReducer } from "./Auth/signup/signUpReducer";
import { UserReducer } from "./User/userData/userDataReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  signup: SignupReducer,
  userProfile: UserReducer,
});

const middlewareEnhancer = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewareEnhancer);

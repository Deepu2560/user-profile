import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { LoginReducer } from "./Auth/login/loginReducer";
import { SignupReducer } from "./Auth/signup/signUpReducer";

const rootReducer = combineReducers({
  login: LoginReducer,
  signup: SignupReducer,
});

const middlewareEnhancer = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewareEnhancer);

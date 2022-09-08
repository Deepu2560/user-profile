import { Route, Routes } from "react-router-dom";

import { Authpage } from "./Page/loginpage/loginpage";
import { SignupPage } from "./Page/signup/signup";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Authpage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/user" />
    </Routes>
  );
};

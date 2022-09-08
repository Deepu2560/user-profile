import { Route, Routes } from "react-router-dom";

import { Authpage } from "./Page/loginpage/loginpage";
import { SignupPage } from "./Page/signup/signup";
import { UserProfilePage } from "./Page/user/userProfile";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Authpage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<UserProfilePage />} />
    </Routes>
  );
};

import { Route, Routes } from "react-router-dom";
import { NotFound404 } from "./Page/404NotFound/404notFound";

import { Authpage } from "./Page/loginpage/loginpage";
import { SignupPage } from "./Page/signup/signup";
import { UserProfilePage } from "./Page/user/userProfile";
import { UserEditPage } from "./Page/userEdit/userEdit";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound404 />} />
      <Route path="/" element={<Authpage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/user" element={<UserProfilePage />} />
      <Route path="/user/edit" element={<UserEditPage />} />
    </Routes>
  );
};

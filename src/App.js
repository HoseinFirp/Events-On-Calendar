import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./pages/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SabteRooyadad from "./pages/SabteRooyadad";
import Profile from "./pages/Profile";
import { useUser } from "./user/userSlice";
import { useEffect, useState } from "react";


function AppLayOut() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const user = useUser();
  useEffect(() => {
    if (user.token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user.token]);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayOut />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {isLogin?<Route path="/profile" element={<Profile />} />:<PageNotFound/>}
          {isLogin?<Route path="/profile/submit-events" element={<SabteRooyadad />} />:<PageNotFound/>}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

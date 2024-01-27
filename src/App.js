import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./pages/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SabteRooyadad from "./pages/SabteRooyadad";
// import Profile from "./pages/Profile";
import Report from "./pages/Report";
import Events from "./pages/Events";
import EventForm from "./pages/EventForm";
import { useUser } from "./user/userSlice";
import { useEffect, useState } from "react";
import ProfileSidebar from "./pages/ProfileSidebar";
import ProfileEmpty from "./pages/ProfileEmpty";
import GetOneList from "./pages/GetOneList";


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

function ProfileLayout() {
  return (
    <div className="flex ">
     {user.token?
      <ProfileSidebar />:null}
    </div>
  );
}
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
          <Route index element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        <Route element={<ProfileLayout/>}>
          {isLogin?<Route path="/profile" element={<ProfileEmpty/>} />:<Route path="*" element={<PageNotFound />} />}
          {isLogin?<Route path="/profile/calender" element={<SabteRooyadad />} />:<Route path="*" element={<PageNotFound />} />}
          {isLogin?<Route path="/profile/report" element={<Report />} />:<Route path="*" element={<PageNotFound />} />}
          {isLogin?<Route path="/profile/report/:_id" element={<Report />} />:<Route path="*" element={<PageNotFound />} />}
          {isLogin?<Route path="/profile/events" element={<Events />} />:<Route path="*" element={<PageNotFound />} />}
          {isLogin?<Route path="/getone" element={<GetOneList />} />:<Route path="*" element={<PageNotFound />} />}
          {/* <Route path="/create-event" element={<EventForm/>}/> */}
        </Route>
          
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
  }

export default App;

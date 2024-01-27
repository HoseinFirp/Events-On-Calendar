import { Link } from "react-router-dom";
import { HiUser } from "react-icons/hi2";
import { updateToken, useUser } from "../user/userSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function Navbar() {
  const [isLogin, setIsLogin] = useState(false);

  const user = useUser();
  const dispatch = useDispatch();

  function ResetHandler() {
    dispatch(updateToken(""));
  }

  useEffect(() => {
    if (user.token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user.token]);

  return (
    <div className="navbar border-b-2 z-10 rounded-lg bg-slate-900  ">
      <div className="flex-1">
        {isLogin ? (
          <Link to="/profile" className="btn btn-ghost text-xl">
            <HiUser />
          </Link>
        ) : null}
      </div>
      <div className="flex-none gap-5">
        {!user.token ? (
          <Link to="/signup">
            <button className="btn btn-square btn-ghost w-20">
              <p>ثبت نام</p>
            </button>
          </Link>
        ) : null}
        {!user.token ? (
          <Link to="/Login">
            <button className="btn btn-square btn-ghost w-20">
              <p>ورود</p>
            </button>
          </Link>
        ) : null}
        {user.token ? (
          <Link to={"/"}>
            <button
              onClick={ResetHandler}
              className="btn btn-square btn-ghost w-20 bg-red-700 hover:bg-red-800"
            >
              <p>خروج</p>
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;

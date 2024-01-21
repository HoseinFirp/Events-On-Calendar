import { Link } from "react-router-dom";
import { HiUser } from "react-icons/hi2";

function Navbar() {
  return (
    <div className="navbar border-b-2 z-10 rounded-lg bg-slate-900">
      <div className="flex-1">
        <Link to="/profile" className="btn btn-ghost text-xl">
          <HiUser />
        </Link>
      </div>
      <div className="flex-none gap-5">
        <Link to="/signup">
          <button className="btn btn-square btn-ghost w-20">
            <p>ثبت نام</p>
          </button>
        </Link>
        <Link to="/Login">
          <button className="btn btn-square btn-ghost w-20">
            <p>ورود</p>
          </button>
        </Link>
        <button className="btn btn-square btn-ghost w-20 hover:bg-red-600">
          <p>خروج</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;

import { Link, Outlet } from "react-router-dom";
import MyCalendar from "./Calendar";
import CountdownTimer from "./CountDown";

function ProfileSidebar() {
  return (
    <div className={`drawer  lg:drawer-open `}>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="h-screen drawer-content flex flex-col items-center justify-center md:mb-20">
        <label
          htmlFor="my-drawer-2"
          className={`mt-5 btn z-20 drawer-button lg:hidden  text-gray-100 hover:bg-gray-500 border-none`}
        >
          باز کردن لیست
        </label>
        <Outlet />
      </div>

      <div className={`z-20 drawer-side  md:mt-16 sm:mt-16 mt-16 lg:mt-0`}>
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className={`drawer-overlay `}
        ></label>
        <ul
          className={
            "menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-5 "
          }
        >
          {/* Sidebar content here */}
          <div className="flex self-center">
            <CountdownTimer initialSeconds={600} />
          </div>

          <li>
            <Link to={"/profile/calender"}>
              <p className="flex self-center rtl: prefix ">تقویم</p>
            </Link>
          </li>
          <li>
            <Link to={"/profile/report"}>
              <p className="flex self-center ">گزارشات</p>
            </Link>
          </li>
          <li>
            <Link to={"/profile/events"}>
              <p className="flex self-center ">ایونت ها</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileSidebar;

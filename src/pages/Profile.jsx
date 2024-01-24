import { Link } from "react-router-dom";
import CountdownTimer from "./CountDown";

function Profile() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="ml-auto mr-auto scale-75 border-b-2   bg-slate-900 p-4 -mt-3  rounded-b-xl">
          <CountdownTimer initialSeconds={600} />
        </div>
        <p className="flex self-center mt-10 font-bold text-2xl">خوش آمدید فلانی </p>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-y-10 mt-40 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <p className="flex self-center ">تقویم</p>
          <button className="btn">
            <Link to="/profile/submit-events">برو </Link>
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <p className="flex self-center ">گزارش</p>
          <button className="btn">
            <Link to="/profile/submit-events">برو </Link>
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <p className="flex self-center ">ایونت ها</p>
          <button className="btn">
            <Link to="/profile/submit-events">برو </Link>
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <p className="flex self-center "> گزارش برنامه کاری یک هفته</p>
          <button className="btn">
            <Link to="/profile/submit-events">برو </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

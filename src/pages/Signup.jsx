import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

// 6Lc-6FUpAAAAAO2j2J6ndH7L5Mbg9a_AcpDPsTuF
function Signup() {
  const [capVal, setCapVal] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div
      className={`flex rounded-lg  items-center flex-col bg-slate-950  h-96 gap-5 w-96  mt-20   ml-auto mr-auto`}
    >
      <form
      id="signup"
        onSubmit={handleSubmit}
        className={`flex items-center flex-col  h-screen gap-3 w-80 ml-auto mr-auto`}
      >
        <h2 className="text-xl pt-3">! همین حالا ثبت نام کن </h2>
        <div className="flex gap-4 content-center mt-2 justify-between w-full ">
          <input
            type="username"
            className="rounded-md  pl-2 pt- pr-2 pb-1"
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="flex self-center">نام کاربری </p>
        </div>
        <div className="flex gap-4 content-center justify-between w-full ">
          <input
            type="username"
            className="rounded-md pl-2 pt-1 pr-2 pb-1"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="flex self-center">پسورد </p>
        </div>
        <div className="flex gap-4 content-center justify-between w-full ">
          <input
            type="username"
            className="rounded-md pl-2 pt-1 pr-2 pb-1"
            onChange={(e) => setRePassword(e.target.value)}
          />
          <p className="flex self-center">تکرار پسورد </p>
        </div>

        <ReCAPTCHA
        
          sitekey="6Lc-6FUpAAAAAO2j2J6ndH7L5Mbg9a_AcpDPsTuF"
          onChange={(val) => setCapVal(val)}
        />
        <div className="flex gap-2 content-center pt-2">
          <button className="text-blue-500 text-sm">
            <Link to="/login">ورود</Link>
          </button>
        <p className="text-sm ">آیا از قبل حساب کاربری داشتید؟</p>
        </div>
        <button
          type="submit"
          className="btn"
          disabled={!capVal || !username || !password || !rePassword}
        >
          <Link to="/profile">ادامه</Link>
        </button>
      </form>
    </div>
  );
}

export default Signup;

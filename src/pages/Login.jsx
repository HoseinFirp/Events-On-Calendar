import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateToken } from "../user/userSlice";

function Login() {
  const [capVal, setCapVal] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  };

  const dispatch = useDispatch();

  const req = async () => {
    try {
      const { data } = await axios.post("https://appback.liara.run/user/Login", {
        username: `${username}`,
        password: `${password}`,
      });
      console.log(data);
      dispatch(updateToken(data.token));
      alert(' شما وارد شدید ')
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div
      className={`flex rounded-lg items-center flex-col  h-96 gap-5 w-96  mt-20  bg-slate-950 ml-auto mr-auto`}
    >
      <form
        id="login"
        onSubmit={handleSubmit}
        className={`flex items-center flex-col rounded-lg  h-screen gap-3 w-80 ml-auto mr-auto`}
      >
        <h2 className="text-xl pt-2">ورود</h2>
        <div className="flex gap-4  mt-4 content-center justify-between w-full pt-2 ">
          <input
            id="username"
            type="username"
            className="rounded-md pl-2 pt-1 pr-2 pb-1"
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="flex self-center">نام کاربری </p>
        </div>
        <div className="flex gap-4 content-center justify-between w-full">
          <input
            id="password"
            type="password"
            className="rounded-md pl-2 pt-1 pr-2 pb-1"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="flex self-center">پسورد </p>
        </div>

        {/* token inja bezar */}
        <ReCAPTCHA
          sitekey="6Lc-6FUpAAAAAO2j2J6ndH7L5Mbg9a_AcpDPsTuF"
          onChange={(val) => setCapVal(val)}
        />
        <div className="flex gap-2 content-center pt-2">
          <button className="text-blue-500 text-sm">
            <Link to="/signup">ثبت نام</Link>
          </button>
          <p className="text-sm mt-1">آیا حساب کاربری ندارید؟</p>
        </div>
        <button
          className="btn mt-3"
          disabled={!capVal || !username || !password}
          onClick={req}
        >
          <Link to="/profile">ادامه</Link>
        </button>
      </form>
    </div>
  );
}

export default Login;

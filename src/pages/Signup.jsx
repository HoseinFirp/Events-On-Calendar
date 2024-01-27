import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Tools/Loader";
import Warning from "../Tools/Warning";
import OkText from "../Tools/OkText";
// import { updateToken } from "../user/userSlice";
// import { useDispatch } from "react-redux";

// 6Lc-6FUpAAAAAO2j2J6ndH7L5Mbg9a_AcpDPsTuF
function Signup() {
  const [capVal, setCapVal] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [equalPass, setEqualPass] = useState();
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState(false);
  const [OkText1,setOkText1] = useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (password === rePassword) {
      setEqualPass(true);
    } else {
      setEqualPass(false);
    }
  }, [password, rePassword]);

  const req = async () => {
    setOkText1(false)
    setWarning(false)
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://appback.liara.run/user/Signup",
        {
          username: `${username}`,
          password: `${password}`,
          confirmPassword: `${rePassword}`,
        }
      );
      console.log(data);
      setOkText1(true)
      alert("حساب کاربری ساخته شد");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error.response.data);
      // alert(error.response.data.message);
      setLoading(false);
      setWarning(true);

    }
    // setIsLoading(false);
  };

  return (<>{warning?
    <Warning
      children={"مشکلی بوجود آمده... دوباره تلاش کنید"}
    />
  :OkText1?<OkText children={"حساب کاربری ساخته شد"}/>:null
  }
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
            type="password"
            className="rounded-md pl-2 pt-1 pr-2 pb-1"
            onChange={(e) => setPassword(e.target.value)}
            />
          <p className="flex self-center">پسورد </p>
        </div>
        <div className="flex gap-4 content-center justify-between w-full ">
          <input
            type="password"
            className="rounded-md pl-2 pt-1 pr-2 pb-1"
            onChange={(e) => setRePassword(e.target.value)}
            />
          <p className="flex self-center">تکرار پسورد </p>
        </div>

        {/* inja token begzarid */}
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
        {loading ? (
          <Loader />
          ) : (
            <button
            type="submit"
            className="btn"
            disabled={
              !capVal || !username || !password || !rePassword || !equalPass
            }
            onClick={req}
          >
            <Link to="/profile">ادامه</Link>
          </button>
        )}
      </form>
    </div>
        </>
  );
}

export default Signup;

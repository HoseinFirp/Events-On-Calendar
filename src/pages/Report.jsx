import axios from "axios";
import { useUser } from "../user/userSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Report() {
const user = useUser()
const [list,setList]=useState()
const navigate = useNavigate();
console.log(list)
    const handleGetList = async () => {
        try {
          const response = await axios.get(
            "https://appback.liara.run/user/getList",
            
            { headers: { authorization: `Bearer ${user.token}` } }
          );
          console.log(response.data);
            setList(response.data)
        //   alert(`${response.data.message}`)
        } catch (error) {
          console.error("Error fetching events:", error);
        }
      };

      

    return (
        <div className="grid md:grid-cols-2 gap-5 grid-cols-1 ">
            <button onClick={handleGetList} className="btn">show</button>
            {list?.map((data) => (
            <div
              className={`bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900  shadow-lg p-5 border-2 mt-5 rounded-xl cursor-pointer w-full grid `}
              key={data._id}
              onClick={() => navigate(`${data._id}`)}
            >
              <p className="text-white text-2xl font-semibold mb-4">متن : {data.text}</p>
              <p className="text-white text-lg font-semibold mb-4">تاریخ : {data.date}</p>

            </div>
          ))}
        </div>
    )
}

/* <p >created at : {data.createdAt}</p>

{data.updatedAt?<p>updated at : {data.updatedAt}</p>:null} */
export default Report

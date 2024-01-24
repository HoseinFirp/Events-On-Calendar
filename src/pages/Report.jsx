import axios from "axios";
import { deleteItem, useUser } from "../user/userSlice";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

function Report() {
  const user = useUser();
  const [click,setClick]=useState(false)
  const params = useParams();
  const dispatch = useDispatch();
  const [list, setList] = useState();
  const navigate = useNavigate();
  console.log(list);
  useEffect(() => {
    const handleGetList = async () => {
      try {
        const response = await axios.get(
          "https://appback.liara.run/user/getList",

          { headers: { authorization: `Bearer ${user.token}` } }
        );
        console.log(response.data);
        setList(response.data);
        //   alert(`${response.data.message}`)
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };handleGetList()

    const handleDeleteList = async () => {
      try {
        const response = await axios.delete(
          `https://appback.liara.run/user/DeleteList/${params._id}`,
  
          { headers: { authorization: `Bearer ${user.token}` } }
        );
        console.log(response);
        // setList(response.data);
        //   alert(`${response.data.message}`)
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    handleDeleteList()
    const abas = click
  }, [params._id,click,user.token]);


  return (
    <div className="grid md:grid-cols-2 ml-24 mr-24 mt-10 overflow-auto gap-5 grid-cols-1 ">
      {/* <button onClick={handleGetList} className="btn">
        show
      </button> */}
      {list?.map((data) => (
        <div
          className={` bg-gradient-to-br opacity-90  from-slate-700 via-purple-900 to-slate-800 shadow-lg p-5   rounded-xl  w-full  grid `}
          key={data._id}
        >
          <div className="flex gap-5 justify-end">
            <button
              className="btn btn-secondary bg text-gray-100 hover:bg-red-600 border-none"
              type="small"
              
            >
              Delete
            </button>
          </div>
          <p className="text-white text-2xl font-semibold  mb-4">
            {data.text}
          </p>
          <p className="text-white text-lg font-semibold mb-4">
            تاریخ :<br/> {data.date}
          </p>
        </div>
      ))}
    </div>
  );
}

/* <p >created at : {data.createdAt}</p>

{data.updatedAt?<p>updated at : {data.updatedAt}</p>:null} */
export default Report;

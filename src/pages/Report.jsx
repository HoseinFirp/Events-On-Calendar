import axios from "axios";
import { fetchDeleteItem, useUser } from "../user/userSlice";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loader from "../Tools/Loader";
import { HiMiniArrowPath } from "react-icons/hi2";

function Report() {
  const [list, setList] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useUser();
console.log(list)

 const handleGetList = useCallback(
    async () => {
      setLoading(true);
        try {
          const response = await axios.get(
            "https://appback.liara.run/user/getList",
    
            { headers: { authorization: `Bearer ${user.token}` } }
          );
          setList(response.data);
        setLoading(false);
            
        } catch (error) {
          console.error("Error fetching events:", error);
          alert('مشکلی در دریافت اطلاعات بوجود آمده... دوباره تلاش کنید')
          setLoading(false);
        
        }
      }, [user]);
  
  useEffect(() => {
    handleGetList();
  }, [handleGetList]);

  function handleUpdateDelete(data) {
    dispatch(fetchDeleteItem(data._id));
  }

  return (<>
    {!loading?<button className="mt-10 flex justify-center gap-3 items-center"  onClick={handleGetList}><HiMiniArrowPath /> بروز رسانی صفحه</button>
    :null}<div className="grid  md:grid-cols-2 ml-24 mr-24 mt-10 overflow-auto gap-5 grid-cols-1 "> 
{loading?
<Loader/>:
    list?.map((data) => (
        <div
          className={` bg-gradient-to-br opacity-90  from-slate-700 via-purple-900 to-slate-800 shadow-lg p-5   rounded-xl  w-full  grid `}
          key={data._id}
        >
          <div className="flex gap-5 justify-start mb-5">
            <button
              className="btn btn-secondary bg-violet-700 text-gray-100 hover:bg-red-600 border-none"
              type="small"
              onClick={() => handleUpdateDelete(data)}
            >
              Delete
            </button>
          </div>
          <p className="text-white text-2xl font-semibold  mb-4 flex justify-end">{data.text}</p>
          <p className="text-white text-md font-semibold mb-4 flex justify-end">
           {data.date.slice(0,15)} : تاریخ 
          </p>
        </div>
      ))}
    </div>
  </>
  );  

}

/* <p >created at : {data.createdAt}</p>

{data.updatedAt?<p>updated at : {data.updatedAt}</p>:null} */
export default Report;

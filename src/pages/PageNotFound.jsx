import { useNavigate } from "react-router-dom";


function useMoveBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}

function PageNotFound() {
  const moveBack = useMoveBack();
  return (
    <div className={` h-screen pt-20 pl-5`}>
      <h1 className={`bg-transparent `}>پیج مورد نظر پیدا نشد 😢</h1>
      <button onClick={moveBack} size="large" className="btn mt-5 border-none hover:bg-slate-500">
        &larr; برگرد
      </button>
    </div>
  );
}

export default PageNotFound;

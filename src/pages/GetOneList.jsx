import axios from "axios";
import { useUser } from "../user/userSlice";
import { useParams } from "react-router-dom";

function GetOneList() {
  const user = useUser();
  const params = useParams();

  const handleGetList = async () => {
    try {
      const response = await axios.get(
        `https://appback.liara.run/user/EditList/${params._id}`,
        {
          text: `text`,
          date: `date`,
        },

        { headers: { authorization: `Bearer ${user.token}` } }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  return (
    <div>
      <button onClick={handleGetList}>hi</button>
    </div>
  );
}

export default GetOneList;

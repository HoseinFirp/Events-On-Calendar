import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { Ren, ren } from "../pages/Report";

const initialState = {
  username: "",
  token: "",
  data: {},
};

 const fetchDeleteItem = createAsyncThunk(
  "user/fetchDeleteItem",
  async (payload , {getState}) => {
    try {
      const response = await axios.delete(
        `https://appback.liara.run/user/DeleteList/${payload}`,

        { headers: { authorization: `Bearer ${getState().user.token}` } }
      );
      console.log(response);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers:(builder) => {
    builder.addCase(fetchDeleteItem.fulfilled , (state,action) => {
      console.log("action:",action)
      console.log("state:",state)
      // state.data = state.data.filter((item) => item._id !== action.payload)
    })
  },
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
    updateToken(state, action) {
      state.token = action.payload;
    },
    updateData(state, action) {
      state.data = action.payload;
    },
    // deleteItem(state, action) {
    //   state.data = state.data.filter((item) => item._id !== action.payload);
    // },
  },
  
});

export const { updateName, updateToken, updateData, deleteItem  } =
  userSlice.actions;
export {fetchDeleteItem}
export const useUser = () => useSelector((state) => state.user);

export default userSlice.reducer;

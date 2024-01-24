import {  createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  username: "",
  token: "",
  data: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
    updateToken(state, action) {
      state.token = action.payload;
    },
    updateData(state, action) {
      state.data = action.payload;
    },deleteItem(state, action) {
      // payload = productId
      state.data = state.data.filter(
        (item) => item._id !== action.payload
      )}
  },
});

export const { updateName, updateToken, updateData,deleteItem } = userSlice.actions;

export const useUser = () => useSelector((state) => state.user);

export default userSlice.reducer;

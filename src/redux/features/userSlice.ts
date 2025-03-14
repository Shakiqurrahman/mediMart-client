import { IUser } from "@/types/userType";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  user: IUser | null;
}
const initialState: IInitialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;

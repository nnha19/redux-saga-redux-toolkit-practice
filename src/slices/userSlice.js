import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { users: [] },
  reducers: {
    getUsers(state, action) {
      state.users = action.payload;
    },
    removeUser(state, action) {
      state.users = state.users.filter((u) => u.id !== action.payload);
    },
  },
});
export const { getUsers, removeUser } = userSlice.actions;
export default userSlice.reducer;

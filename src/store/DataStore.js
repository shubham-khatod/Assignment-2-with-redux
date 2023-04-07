import { configureStore, createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userdata",
  initialState: { userDetails: [] },
  reducers: {
    addDetails(state, action) {
      state.userDetails = [...state.userDetails, action.payload];
    },
  },
});

const store = configureStore({
  reducer: { userData: userDataSlice.reducer },
});

export default store;
export const userDataAction = userDataSlice.actions;

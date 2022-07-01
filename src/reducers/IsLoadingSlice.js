import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true
};

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    stopLoading: (state, action) => {
      // console.log("state.isLoading", action.payload);
      state.isLoading = action.payload;
    }
  }
});

export const loading = (state) => state.loadingState.isLoading;
// console.log("loading inside slice", loading);
export const { stopLoading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;

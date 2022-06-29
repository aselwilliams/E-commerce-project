import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true
};

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
   stopLoading: (state) => {
      state.isLoading = false;
    }
  }
});

export const loading = (state) => state.loadingState.isLoading;

export const { stopLoading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;

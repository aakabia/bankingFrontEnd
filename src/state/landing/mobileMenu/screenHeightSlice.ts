import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface scrollYState {
  value: number;
}

const initialState: scrollYState = {
  value: 0,
};

const screenHeightSlice = createSlice({
  name: "screenHeightSlice",
  initialState,
  reducers: {
    changeScrollY: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { changeScrollY } = screenHeightSlice.actions;
export default screenHeightSlice.reducer;

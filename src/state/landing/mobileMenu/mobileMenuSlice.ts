import { createSlice } from "@reduxjs/toolkit";

interface mobileMenuState {
  value: boolean;
}

const initialState: mobileMenuState = {
  value: false,
};

const mobileMenuSlice = createSlice({
  // createSlice allows us to mutate the state by creating a copy of the state

  name: "ismobileMenuShowing",
  initialState,
  reducers: {
    changeIsShowing: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeIsShowing } = mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;

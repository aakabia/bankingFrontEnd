import { createSlice } from "@reduxjs/toolkit";

interface SignUpModalState {
  value: boolean;
}

const initialState: SignUpModalState = {
  value: false,
};

const SignUpModalSlice = createSlice({
  name: "signUpModalSlice",
  initialState,
  reducers: {
    changeSignUpModalState: (state) => {
      state.value = !state.value;
    },

    resetModalState: (state) => {
      state.value = false;
    },

    showSignUpModal: (state) => {
      state.value = true;
    },
  },
});

export const { changeSignUpModalState, resetModalState, showSignUpModal } =
  SignUpModalSlice.actions;
export default SignUpModalSlice.reducer;

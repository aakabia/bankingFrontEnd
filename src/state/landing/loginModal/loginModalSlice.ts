import { createSlice } from "@reduxjs/toolkit";

interface loginModalState {
  value: boolean;
}

const initialState: loginModalState = {
  value: false,
};

const loginModalSlice = createSlice({
  name: "loginModalSlice",
  initialState,
  reducers: {
    showLoginModal: (state) => {
      state.value = true;
    },

    hideLoginModal: (state) => {
      state.value = false;
    },
  },
});

export const { showLoginModal, hideLoginModal } = loginModalSlice.actions;
export default loginModalSlice.reducer;

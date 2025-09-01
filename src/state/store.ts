import { configureStore } from "@reduxjs/toolkit";
import mobileMenuReducer from "./landing/mobileMenu/mobileMenuSlice";
import scrollYReducer from "./landing/mobileMenu/screenHeightSlice";
import loginModalReducer from "./landing/loginModal/loginModalSlice";
import elmentVisibilityReducer from "./landing/elementVisibility/elementVisibility";
import signUpModalReducer from "./landing/loginModal/signupModalSlice";

export const store = configureStore({
  reducer: {
    mobileMenuShowing: mobileMenuReducer,
    scrollY: scrollYReducer,
    loginModalShowing: loginModalReducer,
    elmentVisibility: elmentVisibilityReducer,
    signUpModalState: signUpModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // get type of state
export type AppDispatch = typeof store.dispatch; // get type of dispatch, for async

// https://www.youtube.com/watch?v=5yEG6GhoJBs for async 25 mins

import { createSlice } from "@reduxjs/toolkit";

interface elmentVisibility {
  root: boolean;
  hero: boolean;
  features: boolean;
  testimonials: boolean;
}

// create a type to match our anticipated payload
// this will be for the value from the the IntersectionObserver object, which is our "entry" object
interface Action {
  payload: {
    target: {
      id: string;
    };

    isIntersecting: boolean;
  };
}

const initialState: elmentVisibility = {
  root: true,
  hero: true,
  features: false,
  testimonials: false,
};

const elmentVisibilitySlice = createSlice({
  name: "elmentVisibilitySlice",
  initialState,
  reducers: {
    // setIsVisbile extracts key from our object
    // uses keyof to ensure typescript that our value is of type elmentVisibility
    // updates value depending on the isIntersecting of that entry

    setIsVisbile: (state, action: Action) => {
      const key = action.payload.target.id as keyof elmentVisibility;

      const acceptableKeys: string[] = [
        "root",
        "hero",
        "features",
        "testimonials",
      ];

      if (!acceptableKeys.includes(key)) {
        return;
      }

      state[key] = action.payload.isIntersecting;
    },
  },

  /*

    inside a slice reducer, you don’t have to spread (like when using setState for objects) the state because Redux Toolkit uses Immer.
    Immer will handle creating a new immutable state behind the scenes.
    
    
    */
});

export const { setIsVisbile } = elmentVisibilitySlice.actions;
export default elmentVisibilitySlice.reducer;

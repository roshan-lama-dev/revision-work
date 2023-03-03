import { createSlice } from "@reduxjs/toolkit";

// we imported the createslice function from the reduxjs toolkit
// this function contains the three fucntion namely name, initialState, reducer

// we will create a initalstate object then under reducers will create different fuctions

// while creating the function we will capture two different parameters namely state and action/

// state will hold the current state information and then action will hold tha parameter that will be sent while this fucntion is called
const initialState = {
  showSideBar: false,
};

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    setShow: (state, { payload = false }) => {
      state.showSideBar = payload;
    },
  },
});

const { reducer, actions } = sideBarSlice;

export const { setShow } = actions;

export default reducer;

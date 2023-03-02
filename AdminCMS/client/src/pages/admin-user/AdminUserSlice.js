import { createSlice } from "@reduxjs/toolkit";

// we need to create a initital state and create datatype that is to be managed by the reducers we created in the state
const initialState = {
  // since we will be working the return object of admin info we will
  //   we wil define what type of data we will have-

  admin: {},
};

// we will create a admin slice where the createSlice takes three object name, initialState, reducers
// createSlice is a function that takes a huge object and this object must have  name , initialState, reducers
// name determines what slice will be called, initalState is an object so the name must be exactly the same, reducers is object which holds the list of function. these function actually updates the initalstate. reducers is a object which holds the list of the function
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    // current state holds the update data from the inital state , action is an object and inside it is payload. and whatever parameters we send inside this function comes under the payload
    setUser: (state, action) => {
      // whenever we call the setUser function the state holds the carbon copy of the initialState data
      //action is the argument that receives the value that is sent through when setUser is called
      state.admin = action.payload;
    },
    unSetUser: (state) => {
      state.admin = {};
    },
  },
});

// we need to focus on 1. security 2. robustness 3. security

// now adminSlice return the reducers and pre-defined keyword  actions when destrcutured. reducers holds the information of the initialState and reducres holds the fucntion and is called action creater. acitons ma map garda is gives all the fucntion created inside the reducers  that is
const { reducer, actions } = adminSlice;

export const { setUser, unSetUser } = actions;

// these inline exported actions can be fired from anywhere as long as we use dispatch
export default reducer;

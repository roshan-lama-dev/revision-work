import { configureStore } from "@reduxjs/toolkit";
import adminReducers from "./pages/admin-user/AdminUserSlice";
const store = configureStore({
  reducer: {
    adminInfo: adminReducers,
    // we will create individaul slices inside the reducer
    // then we need to integrate this to the application
    // for that we will import Provider from the react-redux also import the store that we just created then will pass the store as a porps to the Provider
    // passing the varibles to the props. sending the porps is done by callinga compnent then creating a props variable and then passing the value in to the variable
    // react and redux are two seprate things. react-redux is the bridge that connects them two we use   useDispatch from the react-redux to update the data and useSelector to read the data

    // slice means what data you want to put in the sto
  },
});

export default store;

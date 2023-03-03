import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchAdminLogin } from "../../helper/axisoHelper";
import { setUser, unSetUser } from "./AdminUserSlice";

// we need dispatch to send the data to slice
export const loginAdmin = (frmData) => async (dispatch) => {
  //   call axios to check if login is sucess or not
  //   const navigate = useNavigate();
  const promisedResult = fetchAdminLogin(frmData);

  toast.promise(promisedResult, {
    pending: "Please wait..",
  });
  const { status, message, result } = await promisedResult;
  // show react toastify
  toast[status](message);

  // if login is successful then we should receive the user data which needs to be send to the state by using dispatch

  result?._id && dispatch(setUser(result));
  //   navigate("/dashboard");
};

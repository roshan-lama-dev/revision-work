import axios from "axios";

const rootUrl = process.env.REACT_APP_ROOT_API;
const adminUrl = rootUrl + "admin";
export const registerNewAdmin = async (userObj) => {
  try {
    const { data } = await axios.post(rootUrl + "admin", userObj);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const verifyAdminUser = async (userObj) => {
  try {
    const { data } = await axios.post(adminUrl + "/verify-email", userObj);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const fetchAdminLogin = async (userObj) => {
  try {
    const { data } = await axios.post(adminUrl + "/login", userObj);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

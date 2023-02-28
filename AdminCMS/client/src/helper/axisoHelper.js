import axios from "axios";

const rootUrl = "http://localhost:3000/api/v1/";
export const registerNewAdmin = async (userObj) => {
  try {
    const { data } = await axios.post(rootUrl + "admin", userObj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

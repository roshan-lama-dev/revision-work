import axios from "axios";

const rootUrl = "http://localhost:5000/api/v1/";
const userEp = "user";

// register user
export const createNewUser = async (userObj) => {
  try {
    const { data } = await axios.post(rootUrl + userEp, userObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// login user

export const loginUser = async (loginObj) => {
  try {
    const { data } = await axios.post(rootUrl + userEp + "/login", loginObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// book

export const registerBooks = async (bookObj) => {
  try {
    const { data } = await axios.post(rootUrl + "book", bookObj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// get books

export const getBooks = async () => {
  try {
    const { data } = await axios.get(rootUrl + "book");
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

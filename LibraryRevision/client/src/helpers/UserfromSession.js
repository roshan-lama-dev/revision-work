export const getUser = () => {
  const userObj = JSON.parse(sessionStorage.getItem("user"));
  return userObj.role;
};
export const getUserObj = () => {
  const userObj = JSON.parse(sessionStorage.getItem("user"));
  return userObj;
};

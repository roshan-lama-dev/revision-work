import AdminUserSchema from "./AdminUserSchema.js";

export const postUser = (userObj) => {
  return AdminUserSchema(userObj).save();
};

export const getTheUser = (filter) => {
  return AdminUserSchema.findOne(filter);
};

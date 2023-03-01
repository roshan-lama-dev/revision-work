import AdminUserSchema from "./AdminUserSchema.js";

export const postUser = (userObj) => {
  return AdminUserSchema(userObj).save();
};

export const getTheUser = (filter) => {
  return AdminUserSchema.findOne(filter);
};

export const findAdminAndUpdate = (filter, obj) => {
  return AdminUserSchema.findOneAndUpdate(filter, obj, {
    new: true,
  });
};

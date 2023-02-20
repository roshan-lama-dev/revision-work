import bcrypt from "bcryptjs";

const saltRounds = 15;
export const hashPassword = (plainPassword, saltRounds) => {
  return bcrypt.hashSync(plainPassword, saltRounds);
};

export const comapreTHeHashedPassword = (plainPassword, convertedPassword) => {
  return bcrypt.compareSync(plainPassword, convertedPassword);
};

import { getUserByName } from "../models/user.model.js";

const getByName = async (userName) => {
  return await getUserByName(userName);
};

export default {getByName};
import fs from "fs";
const userDb = "/Users/23LP7916/Desktop/newLog/backend/Models/User.json";

export const getUserByEmail = async (request) => {
  try {
    const { email: paramEmail } = request.params;

    const allUserJson = await fs.readFileSync(userDb);
    const allUser = JSON.parse(allUserJson);
    const exactUser = allUser.find((user) => user.email === paramEmail);

    return exactUser;
  } catch (err) {
    throw new Error(err.message);
  }
};

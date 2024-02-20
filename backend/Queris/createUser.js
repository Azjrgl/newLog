import fs from "fs";
import { makeHash } from "../Utils/PasswordHash.js";

const userDb = "/Users/23LP7916/Desktop/newLog/backend/Models/User.json";

export const createNewUser = async (req, res) => {
  try {
    const { username, email, password, repassword } = req.body;

    if (password & repassword & !password || !repassword) {
      throw new Error("Check your pasword");
    }
    if (!username || !email || !password || !repassword) {
      throw new Error("Fill all submit");
    }
    const newUser = await fs.readFileSync(userDb, "utf-8");
    const existUser = JSON.parse(newUser);

    const useExisted = existUser.find((userDb) => userDb.email === email);

    if (useExisted) {
      throw new Error("User already exist");
    }

    const pass = makeHash(password);
    const repass = makeHash(repassword);

    existUser.push({
      username: username,
      email: email,
      password: pass,
      repassword: repass,
    });

    await fs.writeFileSync(userDb, JSON.stringify(existUser));

    return "success";
  } catch (err) {
    throw new Error(err);
  }
};

import dotenv from "dotenv";
dotenv.config();

export default {
  database: process.env.DATABASE || "",
  username: process.env.USERNAME || "",
  password: process.env.PASSWORD || "",
};

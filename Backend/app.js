import express from "express";
import dotenv from "dotenv";
import dbConnect from "./DataBase/DataBase.js";
import userRouter from "./Routes/userRoutes.js";
import fileUpload from "express-fileupload";
import cors from "cors";
dotenv.config();
const app = express();

const port = process.env.PORT;
dbConnect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload())
app.use(cors());
app.use("/user", userRouter);
app.listen(port, () => {
  console.log(`Server is running on the ${port}`);
});

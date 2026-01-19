import express from "express";
import {
  deleteAll,
  deleteuser,
  findAlluser,
  finduserbyId,
  login,
  singup,
  updateuser,
} from "../controller/userController.js";
const userRouter = express.Router();
userRouter.post("/signup", singup);
userRouter.post("/login", login);
userRouter.post("/findbyid/:id", finduserbyId);
userRouter.delete("/deleteuser/:id", deleteuser);
userRouter.delete("/deleteAlluser", deleteAll);
userRouter.put("/updateUser/:id", updateuser);
export default userRouter;

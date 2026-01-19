// import express from "express";
// import dotenv from "dotenv";
// import dbConnect from "./DataBase/DataBase.js";
// import userRouter from "./Routes/userRoutes.js";
// dotenv.config();
// const app = express();

// const port = process.env.PORT;
// dbConnect();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/user", userRouter);
// app.listen(port, () => {
//   console.log(`Server is running on the ${port}`);
// });

import express from "express";
import dotenv from "dotenv";
import dbConnect from "./DataBase/DataBase.js";
import userRouter from "./Routes/userRoutes.js";

dotenv.config();
const app = express();

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // <-- add this

// Connect DB
dbConnect();

// Routes
app.use("/user", userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

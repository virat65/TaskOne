import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true, default: "" },
    age: { type: Number, required: true, default: 0 },
    password: { type: String, default: "" },
    email: { type: String, required: true, default: "" },
    userType: [{ type: String, enum: ["user", "Admin"], default: "user" }],
    logintime: { type: Number, default: 0 },
    token: { type: String, default: "" },
  },
  { timestamps: true },
);
const userModel = mongoose.model("user", userSchema);
export default userModel;

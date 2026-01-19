import userModel from "../model/userModel.js";
import bcrypt from "bcrypt";
import tokenGen from "../tokenGen/userToken.js";
export const singup = async (req, res) => {
  try {
    console.log(req.body, "req body from signup");

    if (!req.body || !req.body.email || !req.body.password) {
      return res.json({
        message: "Email and password are required",
        status: 400,
        success: false,
        body: {},
      });
    }

    const emailFind = req.body.email.trim();
    const user = await userModel.findOne({ email: emailFind });
    if (user) {
      return res.json({
        message: "User already Exists",
        status: 400,
        success: false,
        body: {},
      });
    } else {
      const passwordEncrypt = await bcrypt.hash(req.body.password, 10);
      console.log("Creating new user");
      const newUser = await userModel.create({
        ...req.body,
        password: passwordEncrypt,
      });

      const token = await tokenGen(newUser._id);
      newUser.token = token.creatusertoken;
      newUser.logintime = token.verifyusertoken.iat;
      await newUser.save();

      return res.json({
        message: "User Created Successfully",
        status: 200,
        success: true,
        body: newUser,
      });
    }
  } catch (error) {
    console.log("Error in Signup", error);
    return res.json({
      message: "Error during signup",
      status: 500,
      success: false,
      body: {},
    });
  }
};
export const login = async (req, res) => {
  try {
    console.log(req.body, "req body from login");

    if (!req.body || !req.body.email || !req.body.password) {
      return res.json({
        message: "Email and password are required",
        status: 400,
        success: false,
        body: {},
      });
    }

    const user = await userModel.findOne({ email: req.body.email });

    if (!user) {
      return res.json({
        message: "User not Exists",
        status: 400,
        success: false,
        body: {},
      });
    } else {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        user.password,
      );
      if (passwordMatch) {
        const token = await tokenGen(user._id);
        user.token = token.creatusertoken;
        user.logintime = token.verifyusertoken.iat;
        await user.save();

        return res.json({
          message: "user login successfully",
          status: 200,
          success: true,
          body: user,
        });
      } else {
        return res.json({
          message: "Email or password is wrong",
          status: 400,
          success: false,
          body: {},
        });
      }
    }
  } catch (error) {
    console.log("Error in login", error);
    return res.json({
      message: "Error during login",
      status: 500,
      success: false,
      body: {},
    });
  }
};

export const findAlluser = async (req, res) => {
  try {
    const users = await userModel.find();
    return res.json({
      message: "Users Feteched Successfully",
      status: 200,
      success: true,
      body: users,
    });
  } catch (error) {
    console.log("Error in findall", error);
    return res.json({
      message: "Error fetching users",
      status: 500,
      success: false,
      body: {},
    });
  }
};

export const finduserbyId = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res.json({
        message: "user not found",
        status: 400,
        success: false,
        body: {},
      });
    } else {
      return res.json({
        message: "user found",
        status: 200,
        success: true,
        body: user,
      });
    }
  } catch (error) {
    console.log("Error in find user by id", error);
    return res.json({
      message: "Error finding user",
      status: 500,
      success: false,
      body: {},
    });
  }
};

export const deleteuser = async (req, res) => {
  try {
    const user = await userModel.deleteOne({ _id: req.params.id });
    return res.json({
      message: "user deleted successfully",
      status: 200,
      success: true,
      body: user,
    });
  } catch (error) {
    console.log(error, "Error in delete");
    return res.json({
      message: "Error deleting user",
      status: 500,
      success: false,
      body: {},
    });
  }
};

export const deleteAll = async (req, res) => {
  try {
    const users = await userModel.deleteMany({});
    return res.json({
      message: "users delelted",
      status: 200,
      success: true,
      body: users,
    });
  } catch (error) {
    console.log(error, "Error in deletAll");
    return res.json({
      message: "Error deleting users",
      status: 500,
      success: false,
      body: {},
    });
  }
};

export const updateuser = async (req, res) => {
  try {
    if (!req.body || !req.body.password) {
      return res.json({
        message: "Password is required",
        status: 400,
        success: false,
        body: {},
      });
    }

    const encryptPassword = await bcrypt.hash(req.body.password, 10);

    const user = await userModel.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body, password: encryptPassword },
      { new: true },
    );

    if (!user) {
      return res.json({
        message: "user not found",
        status: 400,
        success: false,
        body: {},
      });
    } else {
      return res.json({
        message: "user updated",
        status: 200,
        body: user,
        success: true,
      });
    }
  } catch (error) {
    console.log(error, "Error in updateuser");
    return res.json({
      message: "Error during update",
      status: 500,
      success: false,
      body: {},
    });
  }
};

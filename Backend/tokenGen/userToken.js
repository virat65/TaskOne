import jwt  from "jsonwebtoken";
const tokenGen =  (userid) => {
  try {
    const creatusertoken =  jwt.sign(
      { id: userid },
      process.env.secreateKey,
    );

    console.log(creatusertoken, "createUSerToken");
    const verifyusertoken =  jwt.verify(
      creatusertoken,
      process.env.secreateKey,
    );
    console.log(verifyusertoken, "VerifyuserToken");
    return { creatusertoken, verifyusertoken };
  } catch (error) {
    console.log("Error in tokengen", error);
  }
};
export default tokenGen

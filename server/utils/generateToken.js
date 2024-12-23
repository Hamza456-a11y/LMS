import jwt from "jsonwebtoken";

export const generateToken = (res, user, message) => {
  const token = jwt.sign(
    {
      userId: user._id,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );
  return res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 86400000,
    })
    .json({
      message,
      user,
      success: true,
    });
};
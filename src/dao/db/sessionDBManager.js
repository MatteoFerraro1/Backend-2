import { generateToken } from "../../utils/jwtFunctions.js";

export const login = async (req, res) => {
  const payload = {
    email: req.user.email,
    role: req.user.role,
  };

  const token = generateToken(payload);
  res.cookie("token", token, {
    maxAge: 1000 * 60 * 2,
    httpOnly: true,
  });

  return res.status(200).json({ message: "Login ok" });
};
export const register = async (req, res) => {
  res.status(200).json({ message: "User registered" });
};

export const logout = async (req, res) => {
  res.clearCookie("token", { httpOnly: true, path: "/" });
  res.send("Logged out successfully");
};

export const loginError = async (req, res) => {
  return res.status(401).json({ message: "Incorrect password or email" });
};

export const current = async (req, res) => {
  res.json({ message: "Current user", user: req.user });
};
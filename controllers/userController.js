import UserModel from "../models/userModel.js";

export async function signUpUser(req, res) {
  try {
    await UserModel.create(req.body);
    res.status(201).json({ status: "Success", message: "User created" });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ status: "Failed", message: err.message });
  }
}

export async function loginUser(req, res) {
  try {
    // TODO: 1 Pick the Particular User
    // TODO: 2 Mathc the Password with User Password
    // TODO: 3 Generate a Token using JWT
    const filter = req.body;
    const user = await UserModel.find(filter);
    res
      .status(200)
      .json({ status: "Success", message: "User Logged in", user });
  } catch (err) {
    res.status(400).json({ status: "Failed", message: err.message });
  }
}

export async function getUser(req, res) {
  const data = await UserModel.find();
  res.status(200).json({ status: "Success", data });
}

import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  fname: {
    type: String,
    required: [true, "Mandatory Field"],
  },
  lname: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Mandatory Field"],
    unique: [true, "Email already exist"],
  },
  password: {
    type: String,
    required: [true, "Mandatory Field"],
  },
  addressLine1: {
    type: String,
    required: [true, "Mandatory Field"],
    select: false,
  },
  addressLine2: {
    type: String,
    required: [true, "Mandatory Field"],
    select: false,
  },
  city: {
    type: String,
    required: [true, "Mandatory Field"],
    select: false,
  },
});

userSchema.virtual("confirmPassword");

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 8);
  const condition = await bcrypt.compare(this.confirmPassword, this.password);
  if (condition) {
    next();
  } else {
    const err = new Error("Password and Confirm Password didn't match.");
    next(err);
  }
});

const UserModel = model("users", userSchema);

export default UserModel;

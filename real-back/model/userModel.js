const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const { roles } = require("../router/constand");

const userModel = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    require: true,
    lowercase: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    lowercase: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    lowercase: true,
    unique: true,
  },
  cpassword: {
    type: String,
    require: true,
    lowercase: true,
    unique: true,
  },
});


userModel.pre("save", async function (next) {
  try {
    if (this.isNew) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
      const hashedCpassword = await bcrypt.hash(this.cpassword, salt);
      this.cpassword = hashedCpassword;

      if (this.email === process.env.ADMIN_EMAIL.toLowerCase()) {
        this.role = roles.admin;
      }
    }
    next();
  } catch (error) {
    next(error);
  }
});

userModel.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign(
      {
        userId: User._id,
      },
      process.env.JWT_SECRET_KEY
    );
    this.tokens.push({ token: token });
    await this.save();
    res.status(200).json({ token });
    return token;
  } catch (error) {
    throw new Error(error);
  }
};

const User = mongoose.model("USER", userModel);
module.exports = User;

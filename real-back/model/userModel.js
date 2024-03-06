const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const { roles } = require("../router/constand");
require("dotenv").config();
const JWT_KEY = process.env.JWT_SECRET_KEY;

const userModel = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "PostedProperties" }],
  // cpassword: {
  //   type: String,
  //   required: true,
  // },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//we r hashing the password
userModel.pre("save", async function (next) {
  // const user = this;
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

userModel.methods.generateToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, JWT_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

// try {
//   const saltRound = await bcrypt.genSalt(10);
//   console.log(saltRound)
//   const hashPassowrd = await bcrypt.hash(this.password, saltRound);
//   console.log(hashPassowrd);
//   this.password = hashPassowrd;
//   console.log(this.password)
//   if (!hashPassowrd) {
//     // something went wrong
//     console.log("something went wrong");
//   } else {
//     // successful
//     console.log("hsashedPass:", hashPassowrd);
//   }
//   next();
//   // this.password = hashedPassword;

// } catch (error) {
//   next(error);
// }
// });

//json web token genrating the token

console.log("JWT Key:", JWT_KEY);

const User = mongoose.model("USER", userModel);
module.exports = User;

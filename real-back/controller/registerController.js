const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const JWT_SECRET_KEY = "sdgbfibsabbsdnkanfd";
const jwt = require("jsonwebtoken");
const authenticateUser = require("../middlewares/auth.middleware");

require("../db/conn");
require("dotenv").config();

// async function hashPassword(password) {
//   const salt = await bcrypt.genSalt(10);

//   const hashedPassword = await bcrypt.hash(password, salt);
//   return hashedPassword;
// }

router.get("/", authenticateUser, (req, res) => {
  res.status(200).send(`welcome to pratiks real-state`);
});

router.post("/Register", async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phoneNumber ||
    !password

    // || !cpassword
  ) {
    return res
      .status(422)
      .json({ error: "Please fill in all the fields properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const user = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    });

    const userExistPhone = await User.findOne({ phoneNumber: phoneNumber });
    if (userExistPhone) {
      return res.status(422).json({ error: "Mobile number already exists" });
    }
    if (firstName === null || firstName === undefined) {
      return res
        .status(422)
        .json({ error: "Name cannot be null or undefined" });
    }

    const userExistName = await User.findOne({ firstName: firstName });
    if (userExistName) {
      return res.status(422).json({ error: "Name already exists" });
    }

    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      token: await user.generateToken(),
      userId: user._id.toString(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to register" });
  }
});

router.post("/Login", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    console.log("Received login request for email:", email);

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide both email and password" });
    }

    //  // Find user by email
    const userLogin = await User.findOne({ email: email });

    console.log("userLogin:", userLogin);

    if (!userLogin) {
      return res
        .status(404)
        .json({ error: "Invalid Credentials for user not found " });
    }

    console.log("Password", password);
    console.log("User Password", userLogin.password);

    if (userLogin.password) {
      const passwordMatch = await bcrypt.compare(password, userLogin.password);

      if (!passwordMatch) {
        // Passwords do not match
        return res
          .status(401)
          .json({ error: "Invalid Credentials for password is incorrect" });
      }

      token = await userLogin.generateToken();
      console.log(token);
      
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
    } else {
    }
    // Passwords match, generate and return token
    return res.status(200).json({
      msg: "Login successful",
      token,
      userId: userLogin._id.toString(),
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});



module.exports = router;

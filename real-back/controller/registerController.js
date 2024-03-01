const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const jwtSecretKey = "sdgbfibsabbsdnkanfd";
const jwt = require("jsonwebtoken");

require("../db/conn");

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

router.get("/", (req, res) => {
  res.status(200).send(`welcome to pratiks real-state`);
});

router.post("/Register", async (req, res) => {
  const { firstName, lastName, email, phoneNumber, password, cpassword } =
    req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phoneNumber ||
    !password ||
    !cpassword
  ) {
    return res
      .status(422)
      .json({ error: "Please fill in all the fields properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "Passwords do not match" });
    } else {
      const hashedPassword = await hashPassword(password);
      const user = new User({
        firstName,
        lastName,
        email,
        phoneNumber,
        password: hashedPassword,
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

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      user.cpassword = await bcrypt.hash(cpassword, salt);

      await user.save();

      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to register" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide both email and password" });
    }

    const user = await User.findOne({ email: email });
    console.log("userLogin:", user);
    if (!user) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

if (user) {
  const passwordOk = bcrypt.compareSync(password, user.password);
  if (passwordOk) {
    jwt.sign(
      { email: user.email, id: user._id },
      jwtSecretKey,
      {},
      (err, token) => {
        if (err) throw err;

        res.cookie("token", token).json(user);
      }
    );
  } else {
    res.status(422).json("pass not ok ");
  }
} else {
  res.json("not found");
}

    // const isMatch = await bcrypt.compare(password, user.password);

    // if (!isMatch) {
    //   return res.status(400).json({ error: "Invalid Credentials" });
    // }

    // if (userLogin) {
    //   console.log("isMatch:", isMatch)
    //   const token = await userLogin.generateAuthToken();
    //   console.log(token);
    //   res.cookie("jwtoken", token, {
    //     // expires: new Date(Date.now() + 25892000000),
    //     httpOnly: true,
    //   });
    //   return res.json({ message: "User Signin successfully" });
    // } else {
    //   return res.status(400).json({ error: "Invalid Credentials" });
    // }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY);
    res.cookie("token", token, { httpOnly: true });
    res.json({ message: "User Signin successfully", token });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ error: "plzzz Filled the data" });
//     }
//     const userLogin = await User.findOne({ email: email });
//     if (userLogin) {
//       const isMatch = bcrypt.compare(password, userLogin.password);

//       token = await userLogin.generateAuthToken();
//       console.log(token);

//       res.cookie("jwtoken", token, {
//         expires: new Date(Date.now() + 25892000000),
//         httpOnly: true,
//       });
//       if (!isMatch) {
//         res.status(400).json({ error: "Invaild Credientails" });
//       } else {
//         res.json({ message: "User Signin sucessfully" });
//       }
//     } else {
//       res.status(400).json({ error: "Invaild Credientails" });
//     }
//   } catch (error) {
//     console.error("Login error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcrypt");
// const User = require("../model/userModel");
// async function hashPassword(password) {
//   try {
//     const saltRounds = 10;
//     const hashedPassword = await bcrypt.hash(password, saltRounds);
//     return hashedPassword;
//   } catch (error) {
//     console.error("Error hashing password:", error);
//     throw error;
//   }
// }

// router.post("/register", async (req, res) => {
//   const { firstName, lastName, email, phoneNumber, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "User already exists" });
//     }
//     const hashedPassword = await hashPassword(password);

//     const newUser = new User({
//       firstName,
//       lastName,
//       email,
//       phoneNumber,
//       password: hashedPassword,
//     });
//     await newUser.save();
//     res.status(201).json({ message: "Registration successful", user: newUser });
//   } catch (error) {
//     console.error("Error registering user:", error);
//     res.status(500).json({ error: "An error occurred while registering user" });
//   }
// });

// module.exports = router;

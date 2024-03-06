const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_KEY = process.env.JWT_SECRET_KEY;
const User = require("../model/userModel");

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      return res
        .status(401)
        .json({ error: "Unauthorized - Missing token , User Not Found" });
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized - No Invalid token" });
  }
};

module.exports = authenticateUser;

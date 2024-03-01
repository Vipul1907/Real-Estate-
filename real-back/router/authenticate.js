const jwt = require("jsonwebtoken");
const User =  require("../model/userModel");


const Authenticate = async (req, res, next) => {

  try{

   const jwt = require("jsonwebtoken");

   // Inside your login route handler
   const token = jwt.sign({ userId: User._id }, process.env.JWT_SECRET_KEY);
   res.status(200).json({ token });

   
    const rootUser = await User.findOne({
      _id: token._id,
      "tokens.token": token,
    });

    if(!rootUser) { throw new Error ('User not found')}

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();

  }catch(err){
    res.status(401).send('Unauthorized:No token provided');
    console.log(err);
  }
}

module.exports = Authenticate;
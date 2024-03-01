// const mongoose = require("mongoose");
// MONGO_URI = "mongodb://localhost:27017/realestate";
// // const DB = process.env.DATABASE;
// // const DB = MONGO_URI;

// mongoose
//   .connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // serverSelectionTimeoutMS: 60000,
//   })
//   .then(() => {
//     console.log("🚀_Connected Successfully_👻🚀");
//   })
//   .catch((err) => {
//     console.error("☠️__Connection Error_☠️", err.message);
//   });
// // mongoose.set("debug", false);
// module.exports = mongoose;

// //thi is the password for new :-  myspaceindia

const mongoose = require("mongoose");
// const DB = process.env.MONGO_URI;
const MONGO_URI = "mongodb://localhost:27017/realestate";
// const DB = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("🚀_Connected Successfully_👻🚀");
  })
  .catch((err) => {
    console.error("☠️__Connection Error_☠️", err.message);
  });

module.exports = mongoose;

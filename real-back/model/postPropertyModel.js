const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types; 

const postPropertySchema = new mongoose.Schema({
  cityName: {
    type: String,
    // require: true,
  },

  propertyType: {
    type: String,

    // required: true,
  },

  propertyDetails: {
    type: String,

    // required: true,
  },

  numberOfFloors: {
    type: String,
  },
  propertyTitle: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  perks: {
    type: [String],
  },
  locality: {
    type: String,
    // required: true,
  },
  selectBhk: {
    type: String,
  },
  propertyPrice: {
    type: Number,
    // required: true,
  },

  propertyPriceType: {
    type: String,
  },
  //imgpath
  uploadPropertyImages: {
    type: [String],
    // required: true,
  },
  timestamp: { type: Date, default: Date.now },

  likes: [{ type: ObjectId, ref: "User" }],
});

module.exports = new mongoose.model("PostedProperties", postPropertySchema);

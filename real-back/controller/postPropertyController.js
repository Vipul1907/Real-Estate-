const express = require("express");
const router = express.Router();
const Property = require("../model/postPropertyModel");
const multer = require("multer");
const upload = require('../middlewares/multer.middleware');

const imgConfig =
  // For Adding Property
  // Route for adding property
  router.post("/propertyadd", upload.single("photo"), async (req, res) => {
    console.log(req.file);

    // Request body data
    const {
      // tellMeAboutYourself,
      cityName,
      propertyType,
      propertyDetails,
      numberOfFloors,
      propertyTitle,
      description,
      perks,
      locality,
      selectBhk,
      propertyPrice,
      propertyPriceType,
      uploadPropertyImages,
    } = req.body;

// const uploadPropertyImages = req.file ? req.file.path : "";

    try {
      // Check for missing fields
      if (
        // !tellMeAboutYourself ||
        !cityName ||
        !propertyType ||
        !propertyDetails ||
        !numberOfFloors ||
        !propertyTitle ||
        !description ||
        !perks ||
        !locality ||
        !selectBhk ||
        !propertyPrice ||
        !propertyPriceType||
         !uploadPropertyImages
      ) {
        return res
          .status(422)
          .json({ error: "Please fill in all information" });
      }

      // Create a new property instance
      const property = new Property({
        // tellMeAboutYourself,
        cityName,
        propertyType,
        propertyDetails,
        numberOfFloors,
        propertyTitle,
        description,
        perks,
        locality,
        selectBhk,
        propertyPrice,
        propertyPriceType,
        uploadPropertyImages,
      });

      // Save the property to the database
      await property.save();
      res.status(201).json({ message: "Property added successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

// Get All Property

router.get("/propertyget", async (req, res) => {
  let property;
  try {
    property = await Property.find();
  } catch (e) {
    console.log(e);
  }
  if (!property) {
    res.status(400).send("Property Not Found");
  } else {
    res.status(200).json(property);
  }
});

// Get Property By Id

router.get("/propertyget/:id", async (req, res) => {
  const _id = req.params.id;
  let property;
  try {
    property = await Property.findById({ _id });
  } catch (e) {
    console.log(e);
  }
  if (!property) {
    res.status(400).send("Property Not Found");
  } else {
    res.status(200).json(property);
  }
});

// Update Property

router.put("/propertyget/:id", async (req, res) => {
  const _id = req.params.id;
  const {
    tellMeAboutYourself,
    cityName,
    propertyType,
    propertyDetails,
    numberOfFloors,
    propertyTitle,
    description,
    amenities,
    locality,
    selectBhk,
    propertyPrice,
    propertyPriceType,
    uploadPropertyImages,
  } = req.body;
  let property;

  try {
    property = await Property.findByIdAndUpdate(
      { _id },
      {
        cityName,
        propertyType,
        propertyDetails,
        numberOfFloors,
        propertyTitle,
        description,
        amenities,
        locality,
        selectBhk,
        propertyPrice,
        propertyPriceType,
        uploadPropertyImages,
      },
      { new: true }
    );
  } catch (e) {
    console.log(e);
  }
  if (!property) {
    res.status(400).send("Property Not Fonud");
  } else {
    res.status(200).json(property);
  }
});

// Delete Property
router.delete("/propertyget/:id", async (req, res) => {
  const _id = req.params.id;
  let property;
  try {
    property = await Property.findByIdAndDelete({ _id });
  } catch (e) {
    console.log(e);
  }
  if (!property) {
    res.status(400).send("Property Not Found");
  } else {
    res.status(200).json(property);
  }
});

module.exports = router;

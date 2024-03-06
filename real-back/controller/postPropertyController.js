const express = require("express");
const router = express.Router();
const Property = require("../model/postPropertyModel");
const multer = require("multer");
const upload = require("../middlewares/multer.middleware");
const authenticateUser = require("../middlewares/auth.middleware");
const postLike = require("../model/postPropertyModel");

// const imgConfig =
// For Adding Property
// Route for adding property
router.post(
  "/propertyadd",
  upload.single("photo"),

  async (req, res) => {
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
        !propertyPriceType ||
        !uploadPropertyImages
      ) {
        return res
          .status(422)
          .json({ error: "Please fill in all information" });
      }

      // Create a new property instance
      const property = new Property({
        // tellMeAboutYourself,
        _id: new mongoose.Types.ObjectId(),
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
  }
);

// Get All Property

router.get("/propertyget", async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get Property By Id

router.get("/propertyget/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const property = await Property.findById(id);
    if (!property) {
      return res.status(404).send("Property Not Found");
    }
    res.status(200).json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update Property

router.put("/propertyget/:id", async (req, res) => {
  const id = req.params.id;
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
    // property = await Property.findByIdAndUpdate(
    //   { _id },
    //   {
    //     cityName,
    //     propertyType,
    //     propertyDetails,
    //     numberOfFloors,
    //     propertyTitle,
    //     description,
    //     amenities,
    //     locality,
    //     selectBhk,
    //     propertyPrice,
    //     propertyPriceType,
    //     uploadPropertyImages,
    //   },
    //   { new: true }
    // );
    const property = await Property.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!property) {
      return res.status(404).send("Property Not Found");
    }
    res.status(200).json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete Property
router.delete("/propertyget/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const property = await Property.findByIdAndDelete(id);
    if (!property) {
      return res.status(404).send("Property Not Found");
    }
    res.status(200).json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//Likes and dislike the post
// router.put("/like",authenticateUser,(req,res))
router.put("/like", authenticateUser, async (req, res) => {
  try {
    const postId = req.body.postId;
    const userId = req.user._id;

    // Check if the postId is provided
    if (!postId) {
      return res.status(400).json({ error: "postId is required" });
    }

    // Find the property by its ID and update it to push the userId into the likes array
    await Property.findByIdAndUpdate(postId, {
      $push: { likes: userId },
    });

    return res.status(200).json({ message: "Like added successfully" });
  } catch (error) {
    console.error("Error adding like:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

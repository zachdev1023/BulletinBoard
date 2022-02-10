const express = require("express");
const router = express.Router();

const { cloudinary } = require("../../cloudinary");

//Post Model
router.post("/", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "post_images",
    });
    console.log(uploadResponse.url);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Failed to upload..." });
  }
});

module.exports = router;

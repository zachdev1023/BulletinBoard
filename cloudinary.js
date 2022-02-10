const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "hangad-it-solutions",
  api_key: "266979928683457",
  api_secret: "GQE0M1qENXqGOL9uNlqB-Bo9wgI",
});

module.exports = { cloudinary };

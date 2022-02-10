const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const members = require("./routes/api/members");
const posts = require("./routes/api/posts");
const upload = require("./routes/api/upload");

const app = express();

//Bodyparser Middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/members", members);
app.use("/api/posts", posts);
app.use("/api/upload", upload);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set static Folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

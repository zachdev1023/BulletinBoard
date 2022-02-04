const express = require("express");
const router = express.Router();

//Post Model
const Post = require("../../models/Post");

//Get posts
router.get("/", (req, res) => {
  Post.find()
    .sort({ createdDate: -1 })
    .then((posts) => {
      res.json(posts);
    });
});

//Create Posts
router.post("/", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    subtitle: req.body.subtitle,
    post: req.body.post,
  });

  newPost
    .save()
    .then((post) => res.json(post))
    .catch((err) => console.log(err));
});

// @Update members
router.put("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      post
        .updateOne({
          $set: {
            title: req.body.title,
            subtitle: req.body.subtitle,
            post: req.body.post,
          },
        })
        .then(() => res.status(404).json({ success: true }));
    }) // return 404 if not found
    .catch((err) => res.status(404).json({ success: false }));
});

//Delete Posts
router.delete("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((post) =>
      post.remove().then(() => {
        res.json({ result: `${req.params.id} removed` });
      })
    )
    .catch((err) => {
      res
        .status(404)
        .json({ result: `Post with ID: ${req.params.id} does not exist` });
    });
});
module.exports = router;

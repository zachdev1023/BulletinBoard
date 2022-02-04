const express = require("express");
const router = express.Router();

//Member Model
const Member = require("../../models/Member");

// @route GET api/Members
// @desc Get all members
// @access Public

router.get("/", (req, res) => {
  Member.find()
    .sort({ name: -1 })
    .then((members) => res.json(members));
});

// @route GET api/Members by id
// @desc Get member by id
// @access Public

router.get("/:id", (req, res) => {
  Member.findById(req.params.id).then((member) => res.json(member));
});

// @route POST api/Members
// @desc Create members
// @access Public

router.post("/", (req, res) => {
  const newMember = new Member({
    name: req.body.name,
  });

  newMember.save().then((member) => res.json(member));
});

// @route PUT api/Members
// @desc Update members
// @access Public
router.put("/:id", (req, res) => {
  Member.findById(req.params.id)
    .then((member) => {
      member
        .updateOne({
          $set: {
            name: req.body.name,
          },
        })
        .then(() => res.status(404).json({ success: true }));
    }) // return 404 if not found
    .catch((err) => res.status(404).json({ success: false }));
});

// @route Delete api/Members
// @desc Delete member thru id
// @access Public

router.delete("/:id", (req, res) => {
  Member.findById(req.params.id)
    .then((member) => member.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const MemberSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  registeredDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Member = mongoose.model("member", MemberSchema);

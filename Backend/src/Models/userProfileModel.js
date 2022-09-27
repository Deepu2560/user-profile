// importin requried mongoose liberaries
const mongoose = require("mongoose");

// user Profile schema int his schema objectID of user will be stored
const userProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    // version key not required and timestamp required to know when user registered
    versionKey: false,
    timestamps: true,
  },
);

module.exports = mongoose.model("userProfile", userProfileSchema);

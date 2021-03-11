const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  superpower: {
    type: String,
  },
  points: {
    type: Number,
  },
  guide: {
    type: String,
  },
  findings: [
    {
      mapitemId: {
        type: String,
      },
      itemname: {
        type: String,
      },
      owner: {
        type: String,
      },
      lat: {
        type: Number,
      },
      long: {
        type: Number,
      },
    },
  ],
});

// add ref to foundedtreasure and ownedtreasure later

const UserModel = model('user', userSchema);

module.exports = UserModel;

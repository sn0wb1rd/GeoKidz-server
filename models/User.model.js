const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
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
  image: {
    type: String,
  }
});

// add ref to foundedtreasure and ownedtreasure later

const UserModel = model('user', userSchema);

module.exports = UserModel;

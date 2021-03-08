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
  guide: {
    type: String,
  },
  findings: {
    type: Schema.Types.ObjectId, 
    ref: 'mapitem'
  },

});

// add ref to foundedtreasure and ownedtreasure later

const UserModel = model('user', userSchema);

module.exports = UserModel;

const { Schema, model } = require("mongoose");

const mapitemSchema = new Schema({
  type: {
    type: String,
  },
  itemname: {
    type: String,
  },
  image: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  locdesc: {
    type: String,
  },
  questverify: {
    type: String,
  },
  answerverify: {
    type: String,
  },
  founders: {
    type: String,
  },
  objhistory: [
    {
      finder: {
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

const MapitemModel = model("mapitem", mapitemSchema);

module.exports = MapitemModel;

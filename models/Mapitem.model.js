const { Schema, model } = require("mongoose");

const mapitemSchema = new Schema ({
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
    type: String,
  },
  question: {
    type: String,
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
  objhistory: [{
    name: {
      type: finder,
    },
    lat: {
      type: Number,
    },
    long: {
      type: Number,
      required: true
    }
  }],
});


const MapitemModel = model('mapitem', mapitemSchema);

module.exports = MapitemModel
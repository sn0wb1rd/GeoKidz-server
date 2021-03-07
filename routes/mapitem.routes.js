const express = require("express");
const router = express.Router();
let MapitemModel = require("../models/Mapitem.model.js");

// middleware to check if user is loggedIn
const isLoggedIn = (req, res, next) => {
  if (req.session.loggedInUser) {
    //calls whatever is to be executed after the isLoggedIn function is over
    next();
  } else {
    res.status(401).json({
      message: "Unauthorized user",
      code: 401,
    });
  }
};

// PROTECTED ROUTES
// will handle all get requests to http:localhost:5005/api/user

// TODO: add loggedin suer als parameter
// POST | mapitem - add mapitem
router.post("/create", (req, res) => {
  console.log("req body --", req.body);
  // let newObjhistory = {
  //   finder: 'bla',
  //   lat:52.321213,
  //   long:4.838725,
  // }
  const { itemname, image, owner, locdesc, objhistory } = req.body;
  console.log("POST create - req body ", req.body);
  MapitemModel.create({ itemname, image, owner, locdesc, objhistory })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

module.exports = router;

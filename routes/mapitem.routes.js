const express = require("express");
const router = express.Router();
let MapitemModel = require("../models/Mapitem.model.js");

// PROTECTED ROUTES -------------------------------------------
// will handle all get requests to http:localhost:5005/api/user

// middleware to check if user is loggedIn
const isLoggedIn = (req, res, next) => {  
  if (req.session.loggedInUser) {
      //calls whatever is to be executed after the isLoggedIn function is over
      next()
  }
  else {
      res.status(401).json({
          message: 'Unauthorized user',
          code: 401,
      })
  };
};

// TODO: add loggedin user als parameter
// GET | get all mapitems -------------------------------------
router.get("/mapitems", (req, res) => {
  MapitemModel.find()
    .then((mapitems) => {
      res.status(200).json(mapitems);
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: "Something went wrong while fetching all the mapitems",
        message: err,
      });
    });
});

// POST | mapitem - add mapitem -------------------------------
router.post('/create', isLoggedIn, (req, res) => {
  // let newObjhistory = {
  //   finder: 'bla',
  //   lat:52.321213,
  //   long:4.838725,
  // }
  const { itemname, image, owner, locdesc, objhistory } = req.body;
  MapitemModel.create({ itemname, image, owner, locdesc, objhistory })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: "Something went wrong while creating a new mapitem",
        message: err,
      });
    });
});

// TODO: add loggedin user als parameter
// GET | mapitem - get specific mapitem based on ID -----------
router.get('/mapitems/:mapitemId', (req, res) => {
  MapitemModel
    .findById(req.params.mapitemId)
    .populate('owner', {_id: 1, username: 1, superpower: 1})
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: "Something went wrong while fetching a mapitem",
        message: err,
      });
    });
});

// TODO: add loggedin user als parameter
// PATCH | edit a mapitem - get specific mapitem based on ID -----------
router.patch("/mapitems/:mapitemId", (req, res) => {
  let itemId = req.params.mapitemId;
  const { locdesc, finder, lat, long } = req.body;
  // Key Objhistory is an object with three keys
  let newObjhistory = {
    finder: finder,
    lat: lat,
    long: long,
  };

  //Using Set for updating the location, and using a push for adding a finders loc to locdesc
  MapitemModel.findByIdAndUpdate(
    itemId,
    {
      $push: { objhistory: newObjhistory },
      $set: { locdesc: locdesc },
    },
    { new: true }
  )
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        errorMessage: "Something went wrong while updating a mapitem",
        message: err,
      });
    });
});

// TODO: backend check if user=itemowner for deleting?
// DELETE | mapitem -  based on ID -----------
router.delete('/mapitems/:mapitemId', (req, res) => {
  MapitemModel
    .findByIdAndDelete(req.params.mapitemId)
    .then((response) => {res.status(200).json(response) })
    .catch((err) => {
      res.status(500).json({
        errorMessage: "Something went wrong while deleting the mapitem ",
        message: err })
    })
})

// PROTECTED ROUTES
// will handle all get requests to http:localhost:5005/api/user
// router.get("/mapitems", isLoggedIn, (req, res, next) => {
//   res.status(200).json(req.session.loggedInUser);
//   });
  
  

module.exports = router;

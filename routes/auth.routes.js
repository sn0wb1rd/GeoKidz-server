const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
let UserModel = require("../models/User.model.js");

// POST | signup - will handle all POST requests to http:localhost:5005/api/signup
router.post("/signup", (req, res) => {
  const { username, password, guide, superpower } = req.body;

  // -----SERVER SIDE VALIDATION ----------

  if (!username || !password || !superpower) {
    let missingFormValue = "supersecret password";
    // todo: set message for when 2 values are missing a
    if (!username && !password && !superpower) {
      missingFormValue = "username, password or superpower";
    } else if (!username) {
      missingFormValue = "cool username";
    } else if (!password) {
      missingFormValue = "supersecret password";
    } else if (!superpower) {
      missingFormValue = "superpower :( Everyone has one";
    }

    res.status(500).json({
      errorMessage: `Hey there! You forget your ${missingFormValue}!`,
    });
    return;
  }

  // // const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
  // // if (!myRegex.test(email)) {
  // //     res.status(500).json({
  // //       errorMessage: 'Email format not correct'
  // //     });
  // //     return;
  // // }
  // const myPassRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
  // if (!myPassRegex.test(password)) {
  //   res.status(500).json({
  //     errorMessage: 'You need a really special password with at least 8 characters a number and an Uppercase letter!'
  //   });
  //   return;
  // }

  // NOTE: We have used the Sync methods here.
  // creating a salt
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  UserModel.create({ username: username, password: hash, guide, superpower })
    .then((user) => {
      // ensuring that we don't share the hash as well with the user
      user.password = "***";
      res.status(200).json(user);
    })
    .catch((err) => {
      if (err.code === 11000) {
        res.status(500).json({
          errorMessage:
            "Ohw, this name already exists! Choose a special one and remember it well!",
          message: err,
        });
      } else {
        res.status(500).json({
          errorMessage:
            "Something went wrong! Take a deep breath and try again!",
          message: err,
        });
      }
    });
});

// POST | signin will handle all POST requests to http:localhost:5005/api/signin
router.post("/signin", (req, res) => {
  const { username, password } = req.body;

  // -----SERVER SIDE VALIDATION ----------

  if (!username || !password) {
    res.status(500).json({
      errorMessage: "Please enter your username  and password",
    });
    return;
  }
  // const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
  // if (!myRegex.test(email)) {
  //     res.status(500).json({
  //         error: 'Hela! This does not looks like an email',
  //     })
  //     return;
  // }

  // Find if the user exists in the database
  UserModel.findOne({ username })
    .then((userData) => {
      //check if passwords match
      bcrypt
        .compare(password, userData.password)
        .then((doesItMatch) => {
          //if it matches
          if (doesItMatch) {
            // req.session is the special object that is available to you
            userData.passwordHash = "***";
            req.session.loggedInUser = userData;
            res.status(200).json(userData);
            console.log("Yes Loggedin!");
            console.log("req.session: ", req.session);
          }

          //if passwords do not match
          else {
            res.status(500).json({
              errorMessage: "Passwords don't match",
            });
            return;
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            // error: 'Email format not correct',
            errorMessage: "Ai, something did not work",
          });
          return;
        });
    })
    //throw an error if the user does not exists
    .catch((err) => {
      res.status(500).json({
        error: "This user does not exist",
        message: err,
      });
      return;
    });
});

// POST | logout will handle all POST requests to http:localhost:5005/api/logout
router.post("/logout", (req, res) => {
  req.session.destroy();
  // Nothing to send back to the user
  res.status(204).json({});
});

// POST | stores the finded treasure
// TODO later on: user/finding/
router.post("/user/finding/:userId", (req, res) => {
  const { mapitemId, itemname, owner, lat, long } = req.body;
  let newFinding = {
    mapitemId: mapitemId,
    itemname: itemname,
    owner: owner,
    lat: lat,
    long: long,
  };
  console.log("new finding ", newFinding);

  UserModel.findByIdAndUpdate(
    req.params.userId,
    {
      $push: { findings: newFinding },
    },
    { new: true }
  )
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        errorMessage:
          "Something went wrong while updating a userprofile with findings",
        message: err,
      });
    });
});

// GET | gets al the data from a user
// TODO later on: user/details/:userId
router.get("/user/details/:userId", (req, res) => {
  UserModel.findById(req.params.userId)
    .populate("findings")
    .then((response) => {
      console.log("in user get: ", response);
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "This user does not exist",
        message: err,
      });
    });
});

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
router.get("/user", isLoggedIn, (req, res, next) => {
  res.status(200).json(req.session.loggedInUser);
});

module.exports = router;

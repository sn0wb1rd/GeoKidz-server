const express = require('express')
const router = express.Router()

const bcrypt = require('bcryptjs');

let UserModel = require('../models/User.model.js')


// will handle all POST requests to http:localhost:5005/api/signup
router.post('/signup', (req, res) => {
  const {username, password } = req.body;
  console.log('signup: ', username, password);

  // -----SERVER SIDE VALIDATION ----------
  
  if (!username || !password) {
      res.status(500)    
        .json({
          errorMessage: 'Hey there! You forget your username or supersecret password'
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
  UserModel.create({username: username, password: hash})
    .then((user) => {
      // ensuring that we don't share the hash as well with the user
      user.password = "***";
      res.status(200).json(user);
    })
    .catch((err) => {
      if (err.code === 11000) {
        res.status(500).json({
          errorMessage: 'Ohw, this username already exists!',
          message: err,
        });
      } 
      else {
        res.status(500).json({
          errorMessage: 'Something went wrong! Go to sleep!',
          message: err,
        });
      }
    })
});


// will handle all POST requests to http:localhost:5005/api/signin
router.post('/signin', (req, res) => {
  const {username, password } = req.body;
  console.log('signin: ', username, password);

  // -----SERVER SIDE VALIDATION ----------
  
  if ( !username || !password) {
       res.status(500).json({
          error: 'Please enter your username  and password',
     })
    return;  
  }
  // const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
  // if (!myRegex.test(email)) {
  //     res.status(500).json({
  //         error: 'Hela! This does not like an email',
  //     })
  //     return;  
  // }
  

  // Find if the user exists in the database 
  UserModel.findOne({username})
    .then((userData) => {
         //check if passwords match
        bcrypt.compare(password, userData.passwordHash)
          .then((doesItMatch) => {
              //if it matches
              if (doesItMatch) {
                // req.session is the special object that is available to you
                userData.passwordHash = "***";
                req.session.loggedInUser = userData;
                res.status(200).json(userData)
              }
              //if passwords do not match
              else {
                  res.status(500).json({
                      error: 'Passwords don\'t match',
                  })
                return; 
              }
          })
          .catch(() => {
              res.status(500).json({
                  // error: 'Email format not correct',
                  error: 'Ai, something did not work',
              })
            return; 
          });
    })
    //throw an error if the user does not exists 
    .catch((err) => {      
      res.status(500).json({
          error: 'This user does not exist',
          message: err
      })
      console.log('check2')
      return;  
    });

});

// will handle all POST requests to http:localhost:5005/api/logout
router.post('/logout', (req, res) => {
  req.session.destroy();
  // Nothing to send back to the user
  res.status(204).json({});
})


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


// THIS IS A PROTECTED ROUTE
// will handle all get requests to http:localhost:5005/api/user
router.get("/user", isLoggedIn, (req, res, next) => {
res.status(200).json(req.session.loggedInUser);
});

module.exports = router;
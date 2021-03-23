const express = require("express");
const router = express.Router();
let UserModel = require("../models/User.model.js");

router.post("/user/points/:userId", (req, res) => {
  const newPoints = req.body.points;
  console.log("hola", newPoints);

  UserModel.findByIdAndUpdate(
    req.params.userId,
    {
      points: newPoints,
    }
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => {
        res
          .status(500)
          .json({ errorMessage: "Updating user's points failed", err });
      })
  );
});

module.exports = router;

const User = require('../models/userModel.js')

exports.create = async (req, res) => {
  /* get the user data from req.body */
  /* Then save the User to the database */
  const user = req.body;
  if (!user) {
    return res.status(200).send({
      error: "User not found",
    });
  }
  await new User(user).save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(200).send(err);
    });
};

/* Show the current User */
exports.read = async (req, res) => {
  let id = req.params.userId;
  await User.findById(id)
    .then((user) => {
      if (!user) {
        return res.status(200).send({
          error: "User not found with an Id " + id,
        });
      }
      res.json(user);
    })
    .catch((err) => {
      res.status(200).send({
        error: err.message || "An unknown error has occurred.",
      });
    });
};

/* Retrieve all the directory, Users*/
exports.getAllUsers = async (req, res) => {
  /* Add your code. Make sure to send the documents as a JSON response.*/
  await User.find({}, (err, data) => {
    if (err)
      return res.status(200).send({
        message: err.message || "An unknown error occurred",
      });
    res.json(data);
  });
};

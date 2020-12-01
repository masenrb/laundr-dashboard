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
exports.readByID = async (req, res) => {
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

exports.readByUsername = async (req, res) => {
  let tempUser = req.params.username;
  console.log(tempUser);
  await User.find({ username: tempUser })
    .then((user) => {
      if (!user) {
        return res.status(200).send({
          error: "User not found with an username: " + tempUser,
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

exports.readByEmail = async (req, res) => {
  let tempEmail = req.params.email;
  await User.find({ email: tempEmail })
    .then((user) => {
      if (!user) {
        return res.status(200).send({
          error: "User not found with an email: " + tempEmail,
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

exports.readByAccountCreation = async (req, res) => {
  let accCreation = req.params.accountDate;
  await User.find({ accountCreatedDate: accCreation })
    .then((user) => {
      if (!user) {
        return res.status(200).send({
          error: "No users found created on: " + accCreation,
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

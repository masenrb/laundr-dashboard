const Subscription = require('../models/subscriptionModel.js')

/* Create a User */
exports.create = async (req, res) => {
  const sub = req.body;
  if (!sub) {
    return res.status(200).send({
      error: "Subscription not found",
    });
  }
  await new Subscription(subscription).save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(200).send(err);
    });
};

/* Show the current Subscription */
exports.read = async (req, res) => {
  let id = req.params.subscriptionId;
  await Subscription.findById(id)
    .then((subscription) => {
      if (!subscription) {
        return res.status(200).send({
          error: "Subscription not found with an Id " + id,
        });
      }
      res.json(subscription);
    })
    .catch((err) => {
      res.status(200).send({
        error: err.message || "An unknown error has occurred.",
      });
    });
};


/* Retrieve all the directory, Users*/
exports.getAllSubscriptions = async (req, res) => {
  /* Add your code. Make sure to send the documents as a JSON response.*/
  await Subscription.find({}, (err, data) => {
    if (err)
      return res.status(200).send({
        message: err.message || "An unknown error occurred",
      });
    res.json(data);
  });
};
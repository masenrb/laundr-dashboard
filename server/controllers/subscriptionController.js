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

exports.readByName = async (req, res) => {
  let tempSub = req.params.name;
  console.log(tempSub);
  await Subscription.find({ name: tempSub })
    .then((subscription) => {
      if (!subscription) {
        return res.status(200).send({
          error: "Subscription not found with an name: " + tempSub,
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

exports.readByType = async (req, res) => {
  let tempSub = req.params.subscriptionType;
  console.log(tempSub);
  await Subscription.find({ subscriptionType: tempSub })
    .then((subscription) => {
      if (!subscription) {
        return res.status(200).send({
          error: "Subscription not found with type: " + tempSub,
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

exports.readByStartDate = async (req, res) => {
  let tempSub = req.params.startDate;
  console.log(tempSub);
  await Subscription.find({ startDate: tempSub })
    .then((subscription) => {
      if (!subscription) {
        return res.status(200).send({
          error: "Subscription not found with start date: " + tempSub,
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
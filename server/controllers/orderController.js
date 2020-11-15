const Order = require('../models/orderModel.js')

/* Create an Order */
exports.create = async (req, res) => {
  /* get the order data from req.body */
  /* Then save the Order to the database */
  const order = req.body;
  if (!order) {
    return res.status(200).send({
      error: "Order not found",
    });
  }
  await new Order(order).save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(200).send(err);
    });
};

/* Show the current Order */
exports.read = async (req, res) => {
  let id = req.params.orderId;
  await Order.findById(id)
    .then((order) => {
      if (!order) {
        return res.status(200).send({
          error: "Order not found with an Id " + id,
        });
      }
      res.json(order);
    })
    .catch((err) => {
      res.status(200).send({
        error: err.message || "An unknown error has occurred.",
      });
    });
};

/* Retrieve all the directory, Order*/
exports.getAllOrders = async (req, res) => {
  /* Add your code. Make sure to send the documents as a JSON response.*/
  await Order.find({}, (err, data) => {
    if (err)
      return res.status(200).send({
        message: err.message || "An unknown error occurred",
      });
    res.json(data);
  });
};
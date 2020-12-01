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
exports.readByID = async (req, res) => {
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

exports.readByOrderNumber = async (req, res) => {
  let tempOrder = req.params.orderNumber;
  await Order.find({ orderNumber: tempOrder })
    .then((order) => {
      if (!order) {
        return res.status(200).send({
          error: "Order not found with order number: " + tempOrder,
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

exports.readByOrderName = async (req, res) => {
  let tempOrder = req.params.orderName;
  await Order.find({ name: tempOrder })
    .then((order) => {
      if (!order) {
        return res.status(200).send({
          error: "Order not found with order name: " + tempOrder,
        });
      }
      console.log("Order not found with order name: " + tempOrder);
      res.json(order);
    })
    .catch((err) => {
      res.status(200).send({
        error: err.message || "An unknown error has occurred.",
      });
    });
};

exports.readByPickupTime = async (req, res) => {
  let tempOrder = req.params.pickupTime;
  await Order.find({ pickupTime: tempOrder })
    .then((order) => {
      if (!order) {
        return res.status(200).send({
          error: "Order not found with pickup timte: " + tempOrder,
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

exports.readByDeliveryTime = async (req, res) => {
  let tempOrder = req.params.deliveryTime;
  await Order.find({ deliveryTime: tempOrder })
    .then((order) => {
      if (!order) {
        return res.status(200).send({
          error: "Order not found with delivery time: " + tempOrder,
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

exports.readByDriverName = async (req, res) => {
  let tempOrder = req.params.driverName;
  await Order.find({ driverName: tempOrder })
    .then((order) => {
      console.log("Order not found with driver name: " + order + ".");
      if (!order) {
        console.log("Order not found with driver name: " + tempOrder);
        return res.status(200).send({
          error: "Order not found with driver name: " + tempOrder,
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

exports.readByAddress = async (req, res) => {
  let tempOrder = req.params.address;
  await Order.find({ customerAddress: tempOrder })
    .then((order) => {
      if (!order) {
        return res.status(200).send({
          error: "Order not found with customer address: " + tempOrder,
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

exports.readByStatus = async (req, res) => {
  let tempOrder = req.params.status;
  await Order.find({ orderStatus: tempOrder })
    .then((order) => {
      if (!order) {
        return res.status(200).send({
          error: "Order not found with order status: " + tempOrder,
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

exports.readByWeight = async (req, res) => {
  let tempOrder = req.params.weight;
  await Order.find({ orderWeight: tempOrder })
    .then((order) => {
      if (!order) {
        return res.status(200).send({
          error: "Order not found with order weight: " + tempOrder,
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
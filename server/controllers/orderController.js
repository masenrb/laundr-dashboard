const { collection } = require('../models/orderModel.js');
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

exports.readByName = async (req, res) => {
  let tempOrder = req.params.name;
  console.log(tempOrder);
  await Order.find({ name: tempOrder })
    .then((order) => {
      if (!order) {
        return res.status(200).send({
          error: "Order not found with name: " + tempOrder,
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
  let tempOrder = req.params.drivername;
  console.log(tempOrder);
  await Order.find({ drivername: tempOrder })
    .then((order) => {
      if (!order) {
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

exports.readByPickUpTime = async (req, res) => {
  let tempOrder = req.params.pickupTime;
  console.log(tempOrder);
  await Order.find({ pickupTime: tempOrder })
    .then((order) => {
      if (!order) {
        return res.status(200).send({
          error: "Order not found with pickup time: " + tempOrder,
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
  console.log(tempOrder);
  await Order.find({ orderNumber: tempOrder })
    .then((order) => {
      if (!order) {
        return res.status(200).send({
          error: "Order not found with number: " + tempOrder,
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

exports.readByCustomerAddress = async (req, res) => {
  let tempOrder = req.params.customerAddress;
  console.log(tempOrder);
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

exports.readByOrderStatus = async (req, res) => {
  let tempOrder = req.params.orderStatus;
  console.log(tempOrder);
  await Order.find({ orderStatus: tempOrder })
    .then((order) => {
      if (!order) {
        return res.status(200).send({
          error: "Order not found with status: " + tempOrder,
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
  let tempOrder = req.params.orderWeight;
  console.log(tempOrder);
  await Order.find({ orderWeight: tempOrder })
    .then((order) => {
      if (!order) {
        return res.status(200).send({
          error: "Order not found with weight: " + tempOrder,
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
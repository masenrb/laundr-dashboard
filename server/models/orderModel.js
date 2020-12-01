const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderNumber: {type: Number, required: true},
    name: { type: String, required: true },
    pickupTime: {type: String, required: true},
    deliveryTime: {type: String, required: true},
    driverName: {type: String, required: true},
    customerAddress: {type: String, required: true},
    orderStatus: {type: String, required: true},
    orderWeight: {type: Number, required: true},
    orderDate: {type: String, required: true}
},
    {collection: 'orders'}
);

module.exports = mongoose.model('Orders', orderSchema);
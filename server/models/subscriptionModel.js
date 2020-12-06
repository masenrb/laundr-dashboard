const mongoose = require('mongoose')

const subscriptionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    isActive: {type: String, required: true},
    subscriptionType: {type: String, required: true},
    startDate: {type: String, required: true},
    renewalDate: {type: String, required: true},
    maxLbs: {type: Number, required: true},
    currentLbs: {type: Number, required: true}
},
    {collection: 'subscriptions'}
);

module.exports = mongoose.model('Subscriptions', subscriptionSchema);
//import {mongoose} from 'mongoose';

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    accountCreatedDate:{ type: String, required: true },
},
    {collection: 'users'}
);

module.exports = mongoose.model('Users', userSchema);
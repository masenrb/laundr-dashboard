// import config from './config/config.js'
// import userRouter from './routes/userRouter.js';
// import orderRouter from './routes/orderRouter.js';
// import subscriptionRouter from './routes/subscriptionRouter.js';
// import labRouter from './routes/labRouter.js'; - switch to extra routers
// import {connectToDatabase} from './connectMongodb.js';

const express = require('./config/express.js')

// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()
app.listen(port, () => console.log(`Server now running on port ${port}!`));
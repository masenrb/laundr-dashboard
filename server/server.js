// import config from './config/config.js'
// import userRouter from './routes/userRouter.js';
// import orderRouter from './routes/orderRouter.js';
// import subscriptionRouter from './routes/subscriptionRouter.js';
// import labRouter from './routes/labRouter.js'; - switch to extra routers
// import {connectToDatabase} from './connectMongodb.js';

const express = require('./config/express.js')
const cors = require('cors');

// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://localhost:5000');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.listen(port, () => console.log(`Server now running on port ${port}!`));

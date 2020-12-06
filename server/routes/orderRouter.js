const orderController = require('../controllers/orderController.js'),
    express = require('express'), 
    orderRouter = express.Router()

orderRouter.get('/', orderController.getAllOrders);
orderRouter.get('/:orderId', orderController.readByID); //Look at later
orderRouter.post('/', orderController.create);
orderRouter.get('/getordernumber/:orderNumber', orderController.readByOrderNumber);
orderRouter.get('/getname/:name', orderController.readByName);
orderRouter.get('/gettime/:pickupTime', orderController.readByPickupTime);
orderRouter.get('/getdrivername/:driverName', orderController.readByDriverName);
orderRouter.get('/getnumber/:orderNumber', orderController.readByOrderNumber);
orderRouter.get('/getaddress/:customerAddress', orderController.readByAddress);
orderRouter.get('/getstatus/:orderStatus', orderController.readByStatus);
orderRouter.get('/getweight/:orderWeight', orderController.readByWeight);
orderRouter.get('/getdate/:orderDate', orderController.readByDate);


module.exports = orderRouter;

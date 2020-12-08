const orderController = require('../controllers/orderController.js'),
    express = require('express'), 
    orderRouter = express.Router()

orderRouter.get('/', orderController.getAllOrders);
orderRouter.get('/:orderId', orderController.readByID); //Look at later
orderRouter.post('/', orderController.create);
orderRouter.get('/getordernumber/:orderNumber', orderController.readByOrderNumber);
orderRouter.get('/getname/:name', orderController.readByName);
orderRouter.get('/getpickuptime/:pickupTime', orderController.readByPickupTime);
orderRouter.get('/getdelierytime/:deliveryTime', orderController.readByDeliveryTime);
orderRouter.get('/getdrivername/:driverName', orderController.readByDriverName);
orderRouter.get('/getaddress/:address', orderController.readByAddress);
orderRouter.get('/getstatus/:orderStatus', orderController.readByStatus);
orderRouter.get('/getweight/:orderWeight', orderController.readByWeight);
orderRouter.get('/getdate/:orderDate', orderController.readByDate);


module.exports = orderRouter;

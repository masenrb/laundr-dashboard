const orderController = require('../controllers/orderController.js'),
    express = require('express'), 
    orderRouter = express.Router()


orderRouter.get('/', orderController.getAllOrders);
orderRouter.get('/:orderId', orderController.read);
orderRouter.post('/', orderController.create);
orderRouter.get('/getname/:name', orderController.readByName);
orderRouter.get('/gettime/:pickupTime', orderController.readByPickUpTime);
orderRouter.get('/getdrivername/:driverName', orderController.readByDriverName);
orderRouter.get('/getnumber/:orderNumber', orderController.readByOrderNumber);
orderRouter.get('/getaddress/:customerAddress', orderController.readByCustomerAddress);
orderRouter.get('/getstatus/:orderStatus', orderController.readByOrderStatus);
orderRouter.get('/getweight/:orderWeight', orderController.readByWeight);


module.exports = orderRouter;
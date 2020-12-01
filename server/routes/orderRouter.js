const orderController = require('../controllers/orderController.js'),
    express = require('express'), 
    orderRouter = express.Router()

//router.get('/:orderId', orderController.readByID);
module.exports = router;
orderRouter.get('/', orderController.getAllOrders);
orderRouter.get('/:orderId', orderController.read);
orderRouter.post('/', orderController.create);
router.get('/getordernumber/:orderNumber', orderController.readByOrderNumber);
orderRouter.get('/getname/:name', orderController.readByName);
orderRouter.get('/gettime/:pickupTime', orderController.readByPickUpTime);
orderRouter.get('/getdrivername/:driverName', orderController.readByDriverName);
orderRouter.get('/getnumber/:orderNumber', orderController.readByOrderNumber);
orderRouter.get('/getaddress/:customerAddress', orderController.readByCustomerAddress);
orderRouter.get('/getstatus/:orderStatus', orderController.readByOrderStatus);
orderRouter.get('/getweight/:orderWeight', orderController.readByWeight);


module.exports = orderRouter;

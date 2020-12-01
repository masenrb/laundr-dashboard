const orderController = require('../controllers/orderController.js'),
    express = require('express'), 
    router = express.Router()


router.get('/', orderController.getAllOrders);

router.get('/:orderId', orderController.readByID);


router.get('/getordernumber/:orderNumber', orderController.readByOrderNumber);

router.get('/getordername/:orderName', orderController.readByOrderName);

router.get('/getpickuptime/:pickupTime', orderController.readByPickupTime);

router.get('/getdeliverytime/:deliveryTime', orderController.readByDeliveryTime);

router.get('/getdrivername/:driverName', orderController.readByDriverName);

router.get('/getcustomeraddress/:address', orderController.readByAddress);

router.get('/getorderstatus/:status', orderController.readByStatus);

router.get('/getorderweight/:weight', orderController.readByWeight);


router.post('/', orderController.create); 


module.exports = router;
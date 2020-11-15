const orderController = require('../controllers/orderController.js'),
    express = require('express'), 
    router = express.Router()


router.get('/', orderController.getAllOrders);
router.get('/:orderId', orderController.read);
router.post('/', orderController.create); 

module.exports = router;
const subscriptionController = require('../controllers/subscriptionController.js'),
    express = require('express'), 
    router = express.Router()


router.get('/', subscriptionController.getAllSubscriptions);

router.get('/:subscriptionId', subscriptionController.read);

router.post('/', subscriptionController.create);
//test

module.exports = router;
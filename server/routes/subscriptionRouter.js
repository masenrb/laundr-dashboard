const subscriptionController = require('../controllers/subscriptionController.js'),
    express = require('express'), 
    router = express.Router()


router.get('/', subscriptionController.getAllSubscriptions);

router.get('/:subscriptionId', subscriptionController.read);

router.post('/', subscriptionController.create);
//test

router.get('/getname/:name', subscriptionController.readByName);
router.get('/gettype/:subscriptionType', subscriptionController.readByType);
router.get('/getstartdate/:startDate', subscriptionController.readByStartDate);

module.exports = router;
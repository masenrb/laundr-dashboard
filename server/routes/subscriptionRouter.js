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
router.get('/getrenewaldate/:renewalDate', subscriptionController.readByRenewalDate);
router.get('/getmaxpounds/:maxPounds', subscriptionController.readByMaxPounds);
router.get('/getcurrentpounds/:currentPounds', subscriptionController.readByCurrentPounds);


module.exports = router;
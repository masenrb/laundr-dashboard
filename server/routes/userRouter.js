const userController = require('../controllers/userController.js'),
    express = require('express'), 
    userRouter = express.Router()

userRouter.get('/', userController.getAllUsers);

userRouter.get('/:userId', userController.readByID);
  
userRouter.post('/post', userController.create);

userRouter.get('/getuser/:username', userController.readByUsername);

userRouter.get('/getemail/:email', userController.readByEmail);

userRouter.get('/getaccount/:accountDate', userController.readByAccountCreation);

module.exports = userRouter;

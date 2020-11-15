const userController = require('../controllers/userController.js'),
    express = require('express'), 
    userRouter = express.Router()

userRouter.get('/', userController.getAllUsers);

userRouter.get('/:userId', userController.read);
  
userRouter.post('/post', userController.create);

//userRouter.get('/:userId', userRouter.read);
// userRouter.put('/:footballClubId', userController.update);
// userRouter.delete('/:footballClubId', userController.remove);


module.exports = userRouter;

import express from 'express'
import userHandlers from '../handlers/userHandler.js'
const userRouter = express.Router();





userRouter.route('/users').post(userHandlers.postUser).get(userHandlers.getUser);

userRouter.route('/users/:id').patch(userHandlers.updateUser).get(userHandlers.getAllUsers).delete(userHandlers.deleteUser)


export default userRouter;
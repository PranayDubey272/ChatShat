const express = require('express');
// const app = express();
const { loginController,registerController,fetchAllUsersController,fetchUserController} = require("../controllers/userContoller");
const {protect} = require("../middleware/authMiddleware");
const Router = express.Router();
Router.post('/login',loginController);
Router.post('/register',registerController);
Router.get("/fetchUsers", protect, fetchAllUsersController);
Router.get('/:userId',fetchUserController);
module.exports = Router;
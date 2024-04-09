const express = require('express');
// const app = express();
const { loginController,registerController } = require("../controllers/userContoller");
// const {protect} = require("../middleware/authMiddleware");
const Router = express.Router();
Router.post('/login',loginController);
Router.post('/register',registerController);
// Router.get('/fetchUsers',protect,fetchAllUsersController);
module.exports = Router;
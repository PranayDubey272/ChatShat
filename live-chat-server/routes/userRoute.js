const express = require('express');
// const app = express();
const Router = express.Router();
const { loginController,registerController } = require("../controllers/userContoller");
Router.post('/login',loginController);
Router.post('/register',registerController);

module.exports = Router;
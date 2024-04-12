const express = require("express");
const{
    allMessages,
    sendMessage,
} = require("../controllers/messageControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

// Define the parent route
// router.use("/chat", (req, res, next) => {
//   next();
// });

router.route("/:chatId").get(protect, allMessages)
router.route("/").post(protect,sendMessage);

module.exports = router;
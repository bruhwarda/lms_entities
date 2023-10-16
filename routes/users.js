var express = require("express");
var router = express.Router();
const { userController } = require("../controller/index");
router.get("/", userController.getUsers);
router.post("/createUser", userController.createUsers);

module.exports = router;

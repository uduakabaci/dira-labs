const express = require("express");
const router = express.Router();
const userValidator = require("../validators/user.validator");
const validator = require("../middlewares/validator");
const userController = require("../controllers/user.controller");
const check = require("../middlewares/check");

router.post("/", [
  validator(userValidator.joinList),
  check.checkUser,
  userController.joinList,
]);

module.exports = router;

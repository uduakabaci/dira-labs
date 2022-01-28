const express = require("express");
const router = express.Router();
const createError = require("http-errors");

router.use("/users", require("./user.route"));

router.use(async (req, res, next) => {
  next(createError.NotFound("Route not Found"));
});

/* eslint-disable */
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: false,
    message: err.message,
  });
});

module.exports = router;

const userService = require("../services/user.service");
const createError = require("http-errors");

module.exports = {
  async joinList(req, res, next) {
    const data = req.body;
    try {
      const user = await userService.joinList(data);
      res.json(user);
    } catch (e) {
      next(createError(e.statusCode, e.message));
    }
  },
};

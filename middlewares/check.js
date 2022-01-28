const UserModel = require("../model/user.model");
const createError = require("http-errors");

module.exports = {
  async checkUser(req, res, next) {
    const body = req.body;
    // stop if user is not an investor and does not provide description
    if (!body.investor && !body.description)
      return next(
        createError.BadRequest("Description must be provided for non investor")
      );
    const user = await UserModel.findOne({ email: body.email });
    // stop if email already exist.
    if (user)
      return next(
        createError.Conflict(
          "Sorry this email has already been used, used another email!"
        )
      );
    return next();
  },
};

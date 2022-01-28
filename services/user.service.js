const userModel = require("../model/user.model");

module.exports = {
  async joinList(data) {
    const user = await userModel.create(data);
    return user;
  },
};

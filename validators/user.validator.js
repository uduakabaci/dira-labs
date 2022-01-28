const Joi = require("joi");

const schemas = {
  joinList: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    investor: Joi.boolean().required(),
    description: Joi.string(),
  }),
};
module.exports = schemas;

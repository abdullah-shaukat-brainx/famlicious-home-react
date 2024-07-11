const { EMAIL_REGEX } = require("../constants/index");

const isValidEmailFormat = (email) => {
  return EMAIL_REGEX.test(String(email).toLowerCase());
};

module.exports = {
  isValidEmailFormat,
};

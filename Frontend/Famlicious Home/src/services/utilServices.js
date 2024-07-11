import { EMAIL_REGEX } from "../constants";

export const isValidEmailFormat = (email) => {
  return EMAIL_REGEX.test(String(email).toLowerCase());
};

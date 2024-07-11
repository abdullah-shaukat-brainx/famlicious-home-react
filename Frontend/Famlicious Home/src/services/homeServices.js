import { postCall } from "./APIsServices";

export const contactUs = async (data) => {
  return new Promise((resolve, reject) => {
    postCall("/contact-us", data)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const jwt = require("jsonwebtoken");
const createError = require("http-errors");

module.exports = {
  signAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      const payload = {};
      const secret = process.env.ACCESS_TOKEN_SECRET;
      const options = {
        expiresIn: "1h",
        audience: userId,
      };
      jwt.sign(payload, secret, options, (error, token) => {
        if (error) {
          console.log(error);
          reject(createError.InternalServerError());
        }
        resolve(token);
      });
    });
  },
};

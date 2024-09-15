const { validationResult, matchedData } = require("express-validator");
const jwt = require("jsonwebtoken");
const UserQueries = require("../queries/users");
const bcrypt = require("bcrypt");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  // const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const data = matchedData(req);

  let userWithEmail;

  try {
    userWithEmail = await UserQueries.getUserByEmail(data.email);
    if (await bcrypt.compare(data.password, userWithEmail.password)) {
      const jwtToken = jwt.sign(
        {
          id: userWithEmail,
          email: userWithEmail.email,
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
        },
        process.env.JWT_ACCESS_SECRET
      );
      return res
        .status(200)
        .send({ status: "success", message: "Welcome back!", token: jwtToken });
    } else {
      res.send({
        status: "fail",
        message: "Login failed. Please check your credentials.",
      });
    }
  } catch (err) {
    return res.status(500).send({ status: "error", message: err.message });
  }
};

module.exports = {
  login,
};

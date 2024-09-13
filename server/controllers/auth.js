const { validationResult, matchedData } = require("express-validator");
const jwt = require("jsonwebtoken");
const UserQueries = require("../queries/users");

const login = async (req, res) => {
  const { email, password } = req.body;

  let userWithEmail;

  try {
    userWithEmail = await UserQueries.getUserByEmail(email);
    // console.log(userWithEmail);
  } catch (err) {
    return res.status(500).send({ status: "error", message: err.message });
  }

//   console.log("userWithEmail:", userWithEmail);

  if (userWithEmail == null) {
    return res
      .status(400)
      .send({ status: "fail", message: "Email or Pass does not match!" });
  }
  if (userWithEmail.password !== password) {
    return res
      .status(400)
      .send({ status: "fail", message: "Email or Pass does not match!" });
  }

  const jwtToken = jwt.sign(
    { id: userWithEmail, email: userWithEmail.email },
    process.env.JWT_ACCESS_SECRET
  );

  res.json({ message: "Welcome back!", token: jwtToken });
};

module.exports = {
  login,
};

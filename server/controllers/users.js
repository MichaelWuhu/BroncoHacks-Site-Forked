const { validationResult, matchedData } = require("express-validator");
const UserQueries = require("../queries/users");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  try {
    const users = await UserQueries.getUsers();
    if (users.length === 0) {
      return res
        .status(404)
        .send({ status: "fail", message: "No Users Not Found" });
    }
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
}; // end getAllUsers

const getUserByID = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const data = matchedData(req);

  try {
    const user = await UserQueries.getUser(data.userid);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
}; //end getUserByID

const getUserByEmail = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const data = matchedData(req);
  
  try {
    const user = await UserQueries.getUserByEmail(data.email);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

const createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const { name, email, password } = matchedData(req);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserQueries.createAccount(name, email, hashedPassword);
    res.status(200).send({ status: "success", data: newUser });
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
}; //end createUser

const deleteUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const data = matchedData(req);

  try {
    const deletedUser = await UserQueries.deleteUser(data.userid);
    res.status(200).send({ status: "success", data: deletedUser });
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

module.exports = {
  getUsers,
  getUserByID,
  getUserByEmail,
  createUser,
  deleteUser,
};

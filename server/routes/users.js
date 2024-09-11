const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users")
const {
  userIdValidator,
  userEmailValidator,
  accountCreationValidator,
} = require("../validators/users");

// GET route to get all users
router.get("/", UserController.getUsers);

// GET route to get user by id
router.get("/:userid", userIdValidator, UserController.getUserByID);

// GET route to get user by email
router.get("/email/:email", userEmailValidator, UserController.getUserByEmail);

// POST route to create new user
router.post("/", accountCreationValidator, UserController.createUser);

// DELETE route to delete a user
router.delete("/:userid", userIdValidator, UserController.deleteUser);

module.exports = router;

const { param, body } = require("express-validator");
const UserQueries = require("../queries/users");

const userIdValidator = [
  param("userid")
    .notEmpty()
    .withMessage("User ID cannot be empty")
    .isInt() // might need to change if we end up using UUIDs there is a .isUUID() method
    .withMessage("User ID must be an integer"),
];

const userEmailValidator = [
  param("email")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Invalid email format"),
];

const accountCreationValidator = [
  // Validate name
  body("name").notEmpty().withMessage("Name cannot be empty"),
  // Validate email
  body("email")
    .notEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Invalid email format")
    .custom(async (email) => {
      const exists = await UserQueries.getUserByEmail(email);
      if (exists) {
        throw new Error("Email already in use");
      }
    }),
  // Validate password
  body("password")
    .notEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()?])[A-Za-z\d!@#$%^&*()?]{8,}$/
    )
    .withMessage(
      "Password must contain at least 1 uppercase letter, 1 number, and 1 special character"
    ),
];

module.exports = {
  userIdValidator,
  userEmailValidator,
  accountCreationValidator,
};

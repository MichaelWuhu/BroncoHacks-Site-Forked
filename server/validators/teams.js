const { param, body } = require("express-validator");
const TeamQueries = require("../queries/teams");

const teamIdValidator = [
  param("teamid")
    .notEmpty()
    .withMessage("Team ID cannot be empty")
    .isInt() // might need to change if we end up using UUIDs there is a .isUUID() method
    .withMessage("Team ID must be an integer"),
];

const teamCreationValidator = [
  // Validate teamName
  body("teamName").notEmpty().withMessage("Team name cannot be empty"),
  // Validate creator
  body("userid")
    .notEmpty()
    .withMessage("User ID cannot be empty")
    .isInt()
    .withMessage("User ID must be an integer")
    // TODO: figure out a way to check that user is not in multiple teams
];

const teamNameValidator = [
  body("teamName").notEmpty().withMessage("Team name cannot be empty"),
];

module.exports = {
  teamIdValidator,
  teamCreationValidator,
  teamNameValidator,
};

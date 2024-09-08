const { param, body } = require("express-validator");
const TeamQueries = require("../queries/teams");
const UserQueries = require("../queries/users");

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
    .custom(async (userid) => {
      const exists = await UserQueries.getUser(userid);
      if (!exists) {
        throw new Error("User does not exist");
      }
    })
    .custom(async (userid) => {
      const user = await UserQueries.getUser(userid);
      if (user.onTeam) {
        throw new Error("User is already in a team");
      }
    }),
];

const teamNameValidator = [
  body("teamName").notEmpty().withMessage("Team name cannot be empty"),
];

const teamAddMemberValidator = [
  param("teamid")
    .notEmpty()
    .withMessage("Team ID cannot be empty")
    .isInt()
    .withMessage("Team ID must be an integer")
    .custom(async (teamid) => {
      const members = await TeamQueries.getTeamMembers(teamid);
      if (members.length >= 5) {
        throw new Error("Max Team Size Reached");
      }
    }),
  param("userid")
    .notEmpty()
    .withMessage("User ID cannot be empty")
    .isInt()
    .withMessage("User ID must be an integer")
    .custom(async (userid) => {
      const exists = await UserQueries.getUser(userid);
      if (!exists) {
        throw new Error("User does not exist");
      }
    }),
];

module.exports = {
  teamIdValidator,
  teamCreationValidator,
  teamNameValidator,
  teamAddMemberValidator,
};

const { param, body } = require("express-validator");
const TeamQueries = require("../queries/teams");

const teamIdValidator = [
  param("teamid")
    .notEmpty()
    .withMessage("User ID cannot be empty")
    .isInt() // might need to change if we end up using UUIDs there is a .isUUID() method
    .withMessage("User ID must be an integer"),
];

const teamCreationValidator = [
  // Validate teamName
  body("teamName").notEmpty().withMessage("Team name cannot be empty"),
  // Validate owner
  body("teamOwner").notEmpty().withMessage("team owner cannot be empty"),
  body("members")
    .notEmpty()
    .withMessage("members cannot be empty")
    .custom(async (teamid) => {
      const exists = await TeamQueries.getTeamMembers(teamid);
      if (exists.length >= 5) {
        throw new Error("Max amount of team members reached");
      }
    }),
];

module.exports = {
  teamIdValidator,
  teamCreationValidator,
};

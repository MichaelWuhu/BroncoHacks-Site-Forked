const express = require("express");
const router = express.Router();
const TeamController = require("../controllers/teams");
const {
  teamIdValidator,
  teamCreationValidator,
  teamNameValidator,
  teamAddMemberValidator,
} = require("../validators/teams");
const { userIdValidator } = require("../validators/users");

// GET route to get all teams
router.get("/", TeamController.getTeams);

// GET route to get team by id
router.get("/:teamid", teamIdValidator, TeamController.getTeamByID);

// POST route to create new team
router.post("/", teamCreationValidator, TeamController.createTeam);

// PUT route to change team name
router.put("/:teamid/name", teamIdValidator, teamNameValidator, TeamController.changeTeamName);

// PUT route to add a member to a team
router.put("/:teamid/:userid/add", teamAddMemberValidator, TeamController.addToTeam);

// PUT route to remove a member from a team
router.put("/:teamid/:userid/remove", teamIdValidator, userIdValidator, TeamController.removeFromTeam);

// DELETE route to delete a team
router.delete("/:teamid", teamIdValidator, TeamController.deleteTeam);

module.exports = router;

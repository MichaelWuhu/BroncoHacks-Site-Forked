const express = require("express");
const router = express.Router();
const TeamController = require("../controllers/teams");
const {
  teamIdValidator,
  teamCreationValidator,
  teamNameValidator,
} = require("../validators/teams");

// GET route to get all teams
router.get("/", TeamController.getTeams);

// GET route to get team by id
router.get("/:teamid", teamIdValidator, TeamController.getTeamByID);

// GET route to get team members
// router.get("/:teamid/members", teamIdValidator, TeamController.getTeamMembers);

// POST route to create new team
router.post("/", teamCreationValidator, TeamController.createTeam);

// PUT route to change team name
router.put("/:teamid/name", teamIdValidator, teamNameValidator, TeamController.changeTeamName);

// PUT route to add a member to a team
router.put("/:teamid/members", teamIdValidator, TeamController.addToTeam);

// DELETE route to delete a team
router.delete("/:teamid", teamIdValidator, TeamController.deleteTeam);

module.exports = router;

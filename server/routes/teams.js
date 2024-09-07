const express = require("express");
const router = express.Router();
const TeamController = require("../controllers/teams")
// const {
//   userIdValidator,
//   accountCreationValidator,
// } = require("../validators/teams");

// GET route to get all teams
router.get("/", TeamController.getTeams);

// GET route to get team by id
router.get("/:teamid", TeamController.getTeamByID);

// POST route to create new team
router.post("/", TeamController.createTeam);

// DELETE route to delete a team
router.delete("/:teamid", TeamController.deleteTeam);

module.exports = router;

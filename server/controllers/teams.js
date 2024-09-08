const { validationResult, matchedData } = require("express-validator");
const TeamQueries = require("../queries/teams");

const getTeams = async (req, res) => {
  try {
    const teams = await TeamQueries.getTeams();
    if (teams.length === 0) {
      return res
        .status(404)
        .send({ status: "fail", message: "No Teams Not Found" });
    }
    res.status(200).send(teams);
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

const getTeamByID = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const data = matchedData(req);

  try {
    const team = await TeamQueries.getTeam(data.teamid);
    res.status(200).send(team);
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

const getTeamMembers = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const data = matchedData(req);

  try {
    const team = await TeamQueries.getTeamMembers(data.teamid);
    res.status(200).send(team);
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

const createTeam = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const data = matchedData(req);
  console.log(data);
  console.log(req)

  try {
    const newTeam = await TeamQueries.createTeam(data.teamName, data.userid);
    res.status(200).send({ status: "success", data: newTeam });
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message, error: err });
  }
};

const changeTeamName = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const data = matchedData(req);

  try {
    const updatedTeam = await TeamQueries.changeTeamName(
      data.teamid,
      data.newName
    );
    res.status(200).send({ status: "success", data: updatedTeam });
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

const addToTeam = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const data = matchedData(req);

  try {
    const updatedTeam = await TeamQueries.addToTeam(data.teamid, data.userid);
    res.status(200).send({ status: "success", data: updatedTeam });
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

const deleteTeam = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      status: "fail",
      errors: errors.array(),
    });
  }

  const data = matchedData(req);

  try {
    const deletedTeam = await TeamQueries.deleteTeam(data.userid);
    res.status(200).send({ status: "success", data: deletedTeam });
  } catch (err) {
    res.status(500).send({ status: "error", message: err.message });
  }
};

module.exports = {
  getTeams,
  getTeamByID,
  getTeamMembers,
  createTeam,
  changeTeamName,
  addToTeam,
  deleteTeam,
};

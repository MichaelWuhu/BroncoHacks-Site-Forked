const pool = require("../database");
const { get } = require("../routes/teams");

async function getTeams() {
  const users = await pool.query('SELECT * FROM "Team"');
  return users.rows;
}

async function getTeam(id) {
  const result = await pool.query(`SELECT * FROM "Team" WHERE teamid = $1`, [
    id,
  ]);
  team = result.rows[0];
  return team;
}

async function getTeamMembers(id) {
  const result = await pool.query(
    `SELECT members FROM "Team" WHERE teamid = $1`,
    [id]
  );
  members = result.rows[0].members;
  return members;
}

async function getTeamByName(teamName) {
  const result = await pool.query(`SELECT * FROM "Team" WHERE "teamName" = $1`, [
    teamName,
  ]);
  team = result.rows[0];
  return team;
}

async function createTeam(teamName, userid) {
  const members = [userid];
  const result = await pool.query(
    `INSERT INTO "Team" ("teamName", "teamOwner", "members") VALUES ($1, $2, $3)`,
    [teamName, userid, members]
  );
  return getTeamByName(teamName);
}

async function changeTeamName(teamid, newName) {
  await pool.query(`UPDATE "Team" SET "teamName" = $1 WHERE teamid = $2`, [
    newName,
    teamid,
  ]);
  return getTeam(teamid);
}

async function addToTeam(teamid, userid) {
  const members = await getTeamMembers(teamid);
  members.push(userid);

  await pool.query(`UPDATE "Team" SET members = ? WHERE teamid = ?`, [
    members,
    teamid,
  ]);

  return getTeam(teamid);
}

async function deleteTeam(id) {
  const team = await getTeam(id);
  await pool.query(`DELETE FROM "Team" WHERE teamid = ?`, [id]);
  return team;
}

module.exports = {
  getTeams,
  getTeam,
  getTeamMembers,
  getTeamByName,
  createTeam,
  changeTeamName,
  addToTeam,
  deleteTeam,
};

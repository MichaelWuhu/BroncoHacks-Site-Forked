const pool = require("../database");
const UserQueries = require("./users");

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
  members = result.rows[0].members || [];
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
  await pool.query(
    `INSERT INTO "Team" ("teamName", "teamOwner", "members") VALUES ($1, $2, $3)`,
    [teamName, userid, members]
  );
  await UserQueries.userJoinedTeam(userid);
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

  await pool.query(`UPDATE "Team" SET members = $1 WHERE teamid = $2`, [
    members,
    teamid,
  ]);
  await UserQueries.userJoinedTeam(userid);
  return getTeam(teamid);
}

async function removeFromTeam(teamid, userid) {
  const members = await getTeamMembers(teamid);
  const index = members.indexOf(Number(userid)); 
  if (index > -1) {
    members.splice(index, 1);
  }
  
  await pool.query(`UPDATE "Team" SET members = $1 WHERE teamid = $2`, [
    members,
    teamid,
  ]);
  await UserQueries.userLeftTeam(userid);
  return getTeam(teamid);
}

async function deleteTeam(id) {
  const team = await getTeam(id);
  await pool.query(`DELETE FROM "Team" WHERE teamid = $1`, [id]);
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
  removeFromTeam,
  deleteTeam,
};

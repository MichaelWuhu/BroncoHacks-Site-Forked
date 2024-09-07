const pool = require("../database");

async function getTeams() {
  const users = await pool.query('SELECT * FROM "Team"');
  return users.rows;
}

async function getTeam(id) {
  const [team] = await pool.query(`SELECT * FROM "Team" WHERE teamid = ?`, [
    id,
  ]);
  return team;
}

async function getTeamMembers(id) {
  const [team] = await pool.query(
    `SELECT members FROM "Team" WHERE teamid = ?`,
    [id]
  );
  return team;
}

async function createTeam(teamName, userid) {
  //   const members = {userid};
  const members = [userid];
  const [result] = await pool.query(
    `INSERT INTO "Team" (teamName, teamOwner, members) VALUES (?, ?, ?)`,
    [teamName, userid, members]
  );
  const id = result.insertId;
  return getTeam(id);
}

async function changeTeamName(teamid, newName) {
  await pool.query(`UPDATE "Team" SET teamName = ? WHERE teamid = ?`, [
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
  createTeam,
  changeTeamName,
  addToTeam,
  deleteTeam,
};

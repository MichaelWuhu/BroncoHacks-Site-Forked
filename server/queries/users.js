const pool = require("../database");

async function getUsers() {
  const users = await pool.query(`SELECT * FROM "User"`);
  return users.rows;
}


// THIS IS POSTGRESQL SYNTAX THAT WORKS (it's a bit different from MySQL)
async function getUser(id) {
  const result = await pool.query(`SELECT * FROM "User" WHERE userid = $1`, [id]);
  user = result.rows[0];
  return user;
}
//

async function getUserByEmail(email) {
  const [user] = await pool.query(`SELECT * FROM "User" WHERE email = ?`, [
    email,
  ]);
  return user;
}

async function createAccount(email, password) {
  const [result] = await pool.query(
    `INSERT INTO "User" (email, password) VALUES (?, ?)`,
    [email, password]
  );
  const id = result.insertId;
  return getUser(id);
}

async function deleteUser(id) {
  const user = await getUser(id);
  await pool.query(`DELETE FROM "User" WHERE userid = ?`, [id]);
  return user;
}

module.exports = {
  getUsers,
  getUser,
  getUserByEmail,
  createAccount,
  deleteUser,
};

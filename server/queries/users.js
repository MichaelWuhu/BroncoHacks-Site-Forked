const pool = require("../database");

async function getUsers() {
  const users = await pool.query(`SELECT * FROM "User"`);
  return users.rows;
}

// THIS IS POSTGRESQL SYNTAX THAT WORKS (it's a bit different from MySQL)
async function getUser(id) {
  const result = await pool.query(`SELECT * FROM "User" WHERE userid = $1`, [
    id,
  ]);
  user = result.rows[0];
  return user;
}

async function getUserByEmail(email) {
  const result = await pool.query(`SELECT * FROM "User" WHERE email = $1`, [
    email,
  ]);
  user = result.rows[0];
  console.log(user);
  return user;
}

async function createAccount(name, email, password) {
  const result = await pool.query(
    `INSERT INTO "User" (name, email, password) VALUES ($1, $2, $3)`,
    [name, email, password]
  );
  // const id = result.insertId;
  // console.log(result)
  // const id = result.rows[0].userid;
  // console.log(id)
  // const row0 = result.rows[0];
  // console.log(row0);
  return getUserByEmail(email);
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

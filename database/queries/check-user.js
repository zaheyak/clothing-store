const doQuery = require("../query");

/**
 * Check if user exists in the database.
 * @param {Object} user - The user object with username and password.
 * @returns {Object} - Result object with success or error message.
 */
async function check_if_user_exists(user) {
  const { username, password } = user;
  let params = [username, password];
  const sql = `SELECT count(*) FROM users WHERE UserName = ? and Password = ?`;
  const result = await doQuery(sql, params);
  if (result[0]["count(*)"] == 1) {
    return { success: "User authentication successful" };
  } else {
    throw new Error("Invalid username or password.");
  }
}

module.exports =  check_if_user_exists ;

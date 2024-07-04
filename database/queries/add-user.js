const doQuery = require("../query");

/**
 * Add user into 'users' table
 * @param {Object} user - User object with properties: name, email, address, username, password
 * @returns {Promise} - Promise that resolves with success message or rejects with error message
 */
async function addUser(user) {
  try {
    const { name, email, address, username, password } = user;
    const role = "client";

    // Validate input fields (optional step)

    // Prepare parameters for SQL query
    const params = [name, email, address, username, password, role];

    // SQL query string
    const sql = `INSERT INTO users (FullName, Email, Address, UserName, Password, Role) VALUES (?, ?, ?, ?, ?, ?)`;

    // Execute SQL query using doQuery function (assuming it returns a Promise)
    const result = await doQuery(sql, params);

    // Assuming doQuery resolves with result object or similar
    if (result) {
      return { success: "User added successfully" }; // טקסט פשוט כמוחזר
    } else {
      throw new Error("Failed to add user , UserName or Email already exists");
    }
  } catch (error) {
    // Handle errors
    console.error("Error adding user:", error.message);
    throw new Error("Failed to add user, UserName or Email already exists");
  }
}

module.exports = addUser;

const mysql = require("mysql2/promise");
/**
 *  connection to the MySQL database.
 * 
 * This function establishes a connection to the MySQL database using the provided configuration.
 * If a connection already exists, it returns the existing connection; otherwise, it creates a new one.
 * 
 * @returns {Promise<Connection>} - A Promise that resolves to a connection object to the MySQL database.
 */
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "modamakers",
  multipleStatements:true
};

let connection;

async function getDbConnection() {
  if (!connection) {
    connection = await mysql.createConnection(dbConfig);
    console.log("DB Connected")
  }

  return connection;
}

module.exports = getDbConnection;

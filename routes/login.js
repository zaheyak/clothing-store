const express = require("express");
const check_if_user_exists = require("../../database/queries/check-user");

const router = express.Router();

/**
 * POST requests to check user authentication.
 * Checks if the username and password match an existing user in the database.
 */
router.post("/check-user", async (req, res, next) => {
  try {
    console.log("in /login/check-user POST");
    const details = req.body;
    const result = await check_if_user_exists(details);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

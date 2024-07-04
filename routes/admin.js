const express = require("express");
const addUser = require("../../database/queries/add-user");
const router = express.Router();

router.post("/add-user", async (req, res) => {
  try {
    const user = req.body;
    const result = await addUser(user);
    res.json(result); // שילוב התוצאה חוזרת בצורה JSON
  } catch (error) {
    console.error("Error adding user:", error.message);
    res
      .status(500)
      .json({ error: "Failed to add user, UserName or Email already exists" });
  }
});

module.exports = router;

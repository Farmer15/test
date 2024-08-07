const express = require("express");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { accessToken } = req.body;

  const response = await fetch("https://api.notion.com/v1/search", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28"
    },
  });

  const result = await response.json();
  res.send(result);
});

module.exports = router;

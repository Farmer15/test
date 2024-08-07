const express = require("express");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { pageId, accessToken } = req.body;

  const response = await fetch(`https://api.notion.com/v1/blocks/${pageId}/children`, {
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

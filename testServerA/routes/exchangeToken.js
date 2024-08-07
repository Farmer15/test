const express = require("express");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { code } = req.body;
  const encoded = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString("base64");

  const response = await fetch("https://api.notion.com/v1/oauth/token", {
    method: "POST",
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Basic ${encoded}`,
  },
    body: JSON.stringify({
      grant_type: "authorization_code",
      code,
      redirect_uri: process.env.REDIRECT_URL,
    }),
  });

  const result = await response.json();
  console.log(result);
  res.send(result);
});

module.exports = router;

const express = require("express");
const cors = require("cors");
const app = express();
const token = require("./routes/token");
const exchangeToken = require("./routes/exchangeToken");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  methods: "GET, POST, OPTIONS, PUT, PATCH, DELETE",
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/token", token);
app.use("/exchangeToken", exchangeToken);

app.listen(3001, () => {
  console.log("서버 잘 열렸으니 이거 눌러서 들어가.-> http://localhost:3001/");
});

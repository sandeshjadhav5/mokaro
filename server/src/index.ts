const express = require("express");

const { connection } = require("./configs/db.ts");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors({ origin: "*" }));

app.get("/api/v1", (req, res) => {
  res.send("Welcome to Mokaro");
});

//Starting the server
const port = process.env.port || 5000;

app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
  } catch (err) {
    console.log(err);
  }
  console.log(`Listening at port :${port}`);
});

import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MySQLadmin_12345",
  database: "test",
});

app.get("/", (req, res) => {
  res.json("Hello World!");
});

const port = process.env.PORT || 8800;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

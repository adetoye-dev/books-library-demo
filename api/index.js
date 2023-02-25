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

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

const port = process.env.PORT || 8800;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

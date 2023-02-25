import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

/*** const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MySQLadmin_12345",
  database: "test",
}); ***/

app.get("/", (req, res) => {
  res.json("Hello World!");
});

/*** app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO test.books (`title`, `desc`, `cover`) VALUES (?)";

  const values = [req.body.title, req.body.desc, req.body.cover];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.put("/books/:id", (req, res) => {
  const q =
    "UPDATE test.books SET `title` = ?, `desc` = ?, `cover` = ? WHERE id = ?";

  const values = [req.body.title, req.body.desc, req.body.cover];

  db.query(q, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.delete("/books/:id", (req, res) => {
  const q = "DELETE FROM test.books WHERE id = ?";
  db.query(q, req.params.id, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
}); ***/

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

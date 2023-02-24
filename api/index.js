import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello World!");
});

const port = process.env.PORT || 8800;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

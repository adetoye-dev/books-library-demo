import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
  });

  const addBook = async () => {
    try {
      const response = await axios.post("http://localhost:8800/books", {
        ...book,
      });

      if (response.status == 200) {
        alert("Book added successfully");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setBook((book) => ({ ...book, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <header className="header justify-center">
        <h1 className="title">Add New Book</h1>
      </header>
      <main className="main">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="book-title"
            label="Book Title"
            variant="outlined"
            name="title"
            onChange={handleChange}
          />
          <TextField
            id="book-desc"
            label="Book Desc"
            variant="outlined"
            name="desc"
            onChange={handleChange}
          />
          <TextField
            id="book-cover"
            label="Book Cover"
            variant="outlined"
            name="cover"
            onChange={handleChange}
          />
          <Button variant="contained" onClick={addBook}>
            Add Book
          </Button>
        </Box>
      </main>
    </>
  );
};

export default AddBook;

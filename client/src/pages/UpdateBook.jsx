import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateBook = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: state.title,
    desc: state.desc,
    cover: state.cover,
  });

  const updateBook = async (id) => {
    try {
      const response = await axios.put(
        `https://books-library-demo-api.cyclic.app/books/${id}`,
        {
          ...book,
        }
      );

      if (response.status == 200) {
        alert("Book updated successfully");
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
        <h1 className="title">Update Book</h1>
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
            defaultValue={book.title}
          />
          <TextField
            id="book-desc"
            label="Book Desc"
            variant="outlined"
            name="desc"
            onChange={handleChange}
            defaultValue={book.desc}
          />
          <TextField
            id="book-cover"
            label="Book Cover"
            variant="outlined"
            name="cover"
            defaultValue={book.cover}
            onChange={handleChange}
          />
          <Button variant="contained" onClick={() => updateBook(state.id)}>
            Update Book
          </Button>
        </Box>
      </main>
    </>
  );
};

export default UpdateBook;

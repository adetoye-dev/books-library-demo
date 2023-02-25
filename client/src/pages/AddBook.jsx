import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    cover: "",
  });

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
          <Button variant="contained">Add Book</Button>
        </Box>
      </main>
    </>
  );
};

export default AddBook;

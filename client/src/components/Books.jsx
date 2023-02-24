import axios from "axios";
import { useState, useEffect } from "react";
import BookCard from "./BookCard";

const Books = () => {
  const [books, setBooks] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8800/books");
        setBooks(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {books.length !== 0
        ? books.map((book) => {
            return (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                desc={book.desc}
                cover={book.cover}
              />
            );
          })
        : "Fetching books..."}
    </>
  );
};

export default Books;

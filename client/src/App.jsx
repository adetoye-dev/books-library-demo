import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/books" replace={true} />} />
      <Route path="/books" element={<Home />} />
      <Route path="/books/add" element={<AddBook />} />
      <Route path="/books/update/:id" element={<UpdateBook />} />
    </Routes>
  );
}

export default App;

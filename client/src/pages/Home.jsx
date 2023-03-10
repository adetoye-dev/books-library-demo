import { Link } from "react-router-dom";
import Books from "../components/Books";
import "./Home.css";

const Home = () => {
  return (
    <>
      <header className="header">
        <h1 className="title">Books</h1>
        <Link to="/add" className="add-book-btn">
          Add New Book
        </Link>
      </header>
      <main className="main">
        <Books />
      </main>
    </>
  );
};

export default Home;

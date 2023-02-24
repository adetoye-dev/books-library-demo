import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Books</h1>
        <Link className="add-book-btn">Add New Book</Link>
      </header>
      <main className="main"></main>
    </div>
  );
};

export default Home;

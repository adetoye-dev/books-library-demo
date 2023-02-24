import { Link } from "react-router-dom";
import "./BookCard.css";

const BookCard = (props) => {
  return (
    <div className="book-card">
      <div className="book-cover">
        <img src="" alt="book-cover" className="cover-img" />
      </div>
      <div className="book-data">
        <h2 className="book-title">Book Title</h2>
        <p className="book-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minima
          nostrum. Rerum, placeat laudantium. Earum.
        </p>
        <Link to="/update/bookId" className="update">
          Update
        </Link>
        <Link className="delete">Delete</Link>
      </div>
    </div>
  );
};

export default BookCard;

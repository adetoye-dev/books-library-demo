import { Link } from "react-router-dom";
import "./BookCard.css";

const BookCard = (props) => {
  return (
    <div className="book-card">
      <div className="book-cover">
        <img src={props.cover} alt="book-cover" className="cover-img" />
      </div>
      <div className="book-data">
        <h2 className="book-title">{props.title}</h2>
        <p className="book-desc">{props.desc}</p>
        <Link to={`/update/${props.id}`} className="update">
          Update
        </Link>
        <Link className="delete">Delete</Link>
      </div>
    </div>
  );
};

export default BookCard;

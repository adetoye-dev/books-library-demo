import "./BookCard.css";
import { useNavigate } from "react-router-dom";

const BookCard = (props) => {
  const navigate = useNavigate();

  const updateBook = () => {
    navigate(`/update/${props.id}`, {
      state: { ...props },
    });
  };

  return (
    <div className="book-card">
      <div className="book-cover">
        <img src={props.cover} alt="book-cover" className="cover-img" />
      </div>
      <div className="book-data">
        <h2 className="book-title">{props.title}</h2>
        <p className="book-desc">{props.desc}</p>
        <button onClick={updateBook} className="update">
          Update
        </button>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
};

export default BookCard;

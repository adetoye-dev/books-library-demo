import "./BookCard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookCard = (props) => {
  const navigate = useNavigate();

  const updateBook = () => {
    navigate(`/update/${props.id}`, {
      state: { ...props },
    });
  };

  const deleteBook = async (id) => {
    try {
      const response = await axios.delete(
        `https://books-library-demo-api.cyclic.app/books/${id}`
      );

      if (response.status == 200) {
        alert("Book deleted successfully");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
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
        <button className="delete" onClick={() => deleteBook(props.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;

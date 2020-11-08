import React, { useState } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

function FindBook(props) {
    const initialBook = { id: "", title: "", info: "" };
    const [book, setBook] = useState(initialBook);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.bookFacade.findBook(book);
      setBook({ ...initialBook });
    };
  
    function handleChange(event) {
      const value = event.target.value;
      const id = event.target.id;
      setBook({
        ...book,
        [id]: value,
      });
    }
  
  
  
  
    return (
    <div>
      <h2>Add a book!</h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <label>
          Search for ID:<br></br>
          <input type="text" id="title" value = {book.title} onChange={handleChange} />
        </label>
        

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default FindBook;

// Imports for React App to work
import React, { Component } from "react";
import PropTypes from "prop-types";

import ShelfSorter from "./ShelfSorter";
import noCover from "../img/no-cover-image.jpg";

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    sortShelf: PropTypes.func.isRequired
  };

  render() {

    // Declare all the needed props
    const { book, books, sortShelf } = this.props;

    // If there is no cover image from the api, place default image
    const coverImg =
      book.imageLinks && book.imageLinks.thumbnail
        ? book.imageLinks.thumbnail
        : noCover;
    // If no available book title, place default title
    const title = book.title ? book.title : "No title available";

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{ backgroundImage: `url(${coverImg})` }}
            />
            <ShelfSorter book={book} books={books} sortShelf={sortShelf} />
          </div>
          <div className="book-title">{title}</div>
          {/* Renders authors on separate line as needed*/
          book.authors &&
            book.authors.map((author, index) => (
              <div className="book-authors" key={index}>
                {author}
              </div>
            ))}
        </div>
      </li>
    );
  }
}

export default Book;
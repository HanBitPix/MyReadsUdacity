// Imports for React App to work
import React, { Component } from "react";
import PropTypes from "prop-types";
// Book Component
import Book from "../components/Book";

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    sortShelf: PropTypes.func.isRequired
  };

  render() {
    // Declare all the needed props
    const { books, sortShelf } = this.props;

    return (
      <ol className="books-grid">
        {books.map(book => (
          <Book
            book={book}
            books={books}
            key={book.id}
            sortShelf={sortShelf}
          />
        ))}
      </ol>
    );
  }
}

export default BookShelf;
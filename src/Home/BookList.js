// Imports for React App to work
import React, { Component } from "react";
import PropTypes from "prop-types";
// Home Page
import BookShelf from "./BookShelf";

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    sortShelf: PropTypes.func.isRequired
  };

  state = { sortShelf: false };

  render() {
    // Declare all the needed props
    const { books, sortShelf } = this.props;
   
    // 3 different shelf types
    const shelfTypes = [
      { type: "currentlyReading", title: "Currently Reading" },
      { type: "wantToRead", title: "Want to Read" },
      { type: "read", title: "Read" }
    ];

    return (
      <div className="list-books-content">
        {shelfTypes.map((shelf, index) => {
          const shelfBooks = books.filter(book => book.shelf === shelf.type);
          return (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <BookShelf books={shelfBooks} sortShelf={sortShelf} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BookList;
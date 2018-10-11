// Imports for React App to work
import React, { Component } from "react";
import PropTypes from "prop-types";

class ShelfSorter extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    sortShelf: PropTypes.func.isRequired
  };

  render() {
    // Declare all the needed props
    const { book, books, sortShelf } = this.props;

    // default current shelf is none
    let currentShelf = "none";

    // checks to see if a book is in the current list 
    for (let item of books) {
      if (item.id === book.id) {
        currentShelf = item.shelf;
        break;
      }
    }

    return (
      <div className="book-shelf-changer">
        <select
          onChange={event => sortShelf(book, event.target.value)}
          defaultValue={currentShelf}
        >
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfSorter;
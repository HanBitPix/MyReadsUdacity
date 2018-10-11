// Imports for React App to work
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Import Books API that was given
import * as BooksAPI from "../BooksAPI";
// Import Book Component
import Book from "../components/Book";

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    sortShelf: PropTypes.func.isRequired
  };

  state = {
    query: "",
    newBooks: [],
    notFound: false
  };

  getBooks = event => {
    const query = event.target.value;
    this.setState({ query });

    // Query Search when input
    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ newBooks: books, notFound: false })
          : this.setState({ newBooks: [], notFound: true });
      });

      // query empty = do nothing
    } else this.setState({ newBooks: [], notFound: false });
  };

  render() {

    // Declare all the needed props
    const { query, newBooks, notFound } = this.state;
    const { books, sortShelf } = this.props;
    
    // Number of results found color font
    const numberFound = {
      color: 'red'
    };

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.getBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          {newBooks.length > 0 && (
            <div>
              <h3>Search returned <span style={numberFound}>{newBooks.length}</span> books </h3>
              <ol className="books-grid">
                {newBooks.map(book => (
                  <Book
                    book={book}
                    books={books}
                    key={book.id}
                    sortShelf={sortShelf}
                  />
                ))}
              </ol>
            </div>
          )}
          {notFound && (
            <h3>Sorry, no Books Found! Please try a different title.</h3>
          )}
        </div>
      </div>
    );
  }
}
export default Search;
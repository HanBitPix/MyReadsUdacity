// Imports for React App to work
import React from "react";
import { Route, Switch, Link } from "react-router-dom";
// Import Books API that was given
import * as BooksAPI from "./BooksAPI";
// Home Page
import BookList from "./Home/BookList";
// Search Page
import Search from "./BookSearch/Search";
import PageNotFound from "./BookSearch/PageNotFound";
// CSS
import "./App.css";

class BooksApp extends React.Component {
  state = { books: [] };

  componentDidMount() {
    // When ready, get all books and put into books
    BooksAPI.getAll().then(books => 
      this.setState({ books }));
  }

  sortShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      // changes shelf for new / updated books
      changedBook.shelf = shelf;
      // updates state
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook)
      }));
    });
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Switch>
            {/* {Homepage} */}
            <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>My Reads</h1>
                </div>
                <BookList books={books} sortShelf={this.sortShelf} />
                <div className="open-search">
                  <Link to="/search">Search</Link>
                </div>
              </div>
            )}
          />
          {/* {Search Page} */}
          <Route
            path="/search"
            render={({ history }) => (
              <Search books={books} sortShelf={this.sortShelf} />
            )}
          />
          {/* {404 Error Page}  */}
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
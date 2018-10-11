# MyReads (Udacity Project)
> a simple app to organize your books


## To Get Started
* install all project dependencies with `npm install`
* start the development server with `npm start`

## How it Works
When you start, will have default books that will be there already

![Screenshot](/src/img/home-page.png)

With each book, you will have 3 options to organize by:
* Currently reading
* Want to read
* Read
* None

![Screenshot](/src/img/update.png)

### `Add Books`
To search & add more books to your collection, click on the green button as shown.

![Screenshot](/src/img/search.png)

Search by typing in the search bar
![Screenshot](/src/img/search-result.png)

To add books, simply click on the arrow down of the book and you will have the 3 same options to organize it by:
* Currently reading
* Want to read
* Read
* None
![Screenshot](/src/img/add.png)


### `Remove Books`
Simply within the options, click on `none` to remove from you collection.
![Screenshot](/src/img/remove.png)

### 404 | Page Not Found
If you go anywhere else, the 404 Erorr Page will show

### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

### Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

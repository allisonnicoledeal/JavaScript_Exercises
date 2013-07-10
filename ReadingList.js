var BookList = function(myBooks) {

	// number of books read (cache), number
	this.booksReadCache = null;
	// current book (cache), book
	this.currentBookPointer = null;
	// last read book (cache), book
	this.lastReadCache = null;
	// next book (cache), book
	this.nextBookCache = null;
	// array of all books
	this.bookShelf = myBooks;


	// number of books read, returns number
	this.booksRead = function() {
		if (this.booksReadCache !== null) {
			return this.booksReadCache;
		} else {
			this.booksReadCache = 0;
			for (var i = 0; i < this.bookShelf.length; i++) {
				if (this.bookShelf[i].read === true) {
					this.booksReadCache++;
				}
			}
			return this.booksReadCache;
		}
	};

	// number of books not read, returns number
	this.booksNotRead = function() {
		return (this.bookShelf.length - this.booksRead());
	};

	// set current book being read
	this.setCurrentBook = function(book) {
		var inShelf = false;
		for (var i = 0; i < this.bookShelf.length; i++) {
			if (book === this.bookShelf[i]) {
				inShelf = true;
				if (book.read === false) {
					this.currentBookPointer = book;
					break;
				} else {
					console.log("Book has already been read.");
					break;
				}
			}
		}
		if (inShelf === false) {
			console.log("Book not in shelf.");
		}
	};

	// returns next unread book to read
	this.nextBook = function(){
		var shelfLength = this.bookShelf.length;
		if ((this.booksReadCache == shelfLength) || (this.booksRead() == shelfLength)) {
			console.log("All books have been read.");
		} else if (this.nextBookCache !== null) {
				return nextBookCache;
		} else {
			for (var i = 0; i <= shelfLength; i++) {
				if (this.bookShelf[i].read === false) {
					nextBookCache = this.bookShelf[i];
					return nextBookCache;
				}
			}
		}
	};

	// return book with most recent readDate
	this.getLastRead = function() {
		if (this.lastReadCache !== null) {
			return this.lastReadCache;
		} else {
			this.lastReadCache = this.bookShelf[0];
			for (var i = 0; i < this.bookShelf.length; i++) {
				if (this.lastReadCache.readDate < this.bookShelf[i].readDate) {
					this.lastReadCache = this.bookShelf[i];
				}
			}
		}
		return this.lastReadCache;
	};

	// add book to books list
	this.add = function(book){
		this.bookShelf.push(book);
		this.booksReadCache = null;
		this.lastReadCache = null;
	};

	// finish current book
	this.finishCurrentBook = function() {
		if (this.currentBookPointer !== null) {
			this.currentBookPointer.read = true;
			this.currentBookPointer.readDate = Date();
			this.lastReadCache = currentBookPointer;
			currentBookPointer = null;
		} else {
			console.log("There is no current book to finish.");
		}
	};
};

var Book = function(title, genre, author, read, readDate) {
	this.title = title;
	this.genre = genre;
	this.author = author;
	this.read = read;
	this.readDate = readDate || null;
};

// var date1 = new Date(2013, 1, 7);
var book1 = new Book("Book1", "scifi", "Author1", true, new Date(1013, 4, 6));
var book2 = new Book("Book2", "fiction", "Author2", false);
var book3 = new Book("Book3", "non-fiction", "Author3", true, new Date(1999, 10, 10));
var myBookList = [book1, book2, book3];
var bookList1 = new BookList(myBookList);

console.log(bookList1);
console.log(bookList1.booksRead());

console.log(bookList1.booksNotRead());

bookList1.setCurrentBook(book2);
console.log(bookList1.currentBookPointer);

console.log(bookList1.nextBook());

console.log(bookList1.getLastRead());

console.log(bookList1.bookShelf);
var book5 = new Book("Book5", "childrens", "Author5", false);
bookList1.add(book5);

bookList1.finishCurrentBook();

console.log(bookList1.bookShelf);
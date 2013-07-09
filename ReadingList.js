var BookList = function(myBooks) {
	this.booksRead = function() {
		var numRead = 0;
		for (var i = 0; i < myBooks.length; i++) {
			if (myBooks[i].read = true) {
				numRead++;
			};
		};
		return numRead;
	},
	this.booksNotRead = myBooks.lengh - this.booksRead,
	this.nextBook = function(book){
		return 
	this.add = function(book){
		myBooks.push(book);
	}
	}

}

var Book = function(title, genre, author, read, readDate) {
	this.title = title,
	this.genre = genre,
	this.author = author,
	this.read = read,
	this.read
}
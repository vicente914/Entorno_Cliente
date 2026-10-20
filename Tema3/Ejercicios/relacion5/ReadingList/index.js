class Booklist{
    constructor(){
        this.readedBooks = 0;
        this.notReadedBooks = 0;
        this.nextBook = null;
        this.currentBook = null;
        this.lastBook = null;
        this.books = [];
    }

    add(book){
        books.push(book);
    }

    finishCurrentBook(){
        this.currentBook.read = true;
        this.currentBook.read_date = new Date();
        this.lastBook = this.currentBook;
        this.readedBooks++;
        this.notReadedBooks--;
        this.currentBook = this.nextBook;
        this.nextBook

    }
}

class Book{
    
    constructor(title, genre, author, read, read_date){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        if(this.read_date != null){
            this.read_date = new Date();
        }
    }
}
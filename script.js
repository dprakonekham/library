let myLibrary = [];

function Book(author,title,pages){
    this.author = author;
    this.title = title;
    this.pages = pages;
}

function addBooktoLibrary(book){
    myLibrary.push(book);
}


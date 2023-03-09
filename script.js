let myLibrary = [];

function Book(title,author,pages,currentPage){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.page = currentPage;
}

function addBooktoLibrary(book){
    myLibrary.push(book);
}


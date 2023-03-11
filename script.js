let myLibrary = [];

function localSave(){
    //Load existing library
}

function initialPrint(){
    //Iterate myLibrary objects and add to the library container
    Object.keys(myLibrary).forEach(function(book){
        const library = document.getElementById("libraryContainer");

        const bookContainer = document.createElement("book" + book.toString);
        bookContainer.style.display = "flex";
        bookContainer.style.flexDirection = "column";
        bookContainer.style.alignContent = "center";
        bookContainer.style.justifyContent = "center";
        bookContainer.style.color = "purple";
        bookContainer.style.backgroundColor = "gold";
        bookContainer.style.border = "solid black";

        const newTitle = document.createElement("title" + book.toString);
        newTitle.textContent = myLibrary[book].title;
        bookContainer.appendChild(newTitle);

        const newAuthor = document.createElement("author" + book.toString);
        newAuthor.textContent = myLibrary[book].author;
        bookContainer.appendChild(newAuthor);

        library.appendChild(bookContainer)
    });
}

function Book(title,author,pages,currentPage){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.page = currentPage;
}

function addBooktoLibrary(book){
    myLibrary.push(book);
}

const addButton = document.getElementById("addBookBtn");
addButton.addEventListener('click', function(e){
    if(document.getElementById("addBookForm").style.display != "block"){
        openForm();
    }else if (document.getElementById("addBookForm").style.display == "block"){
        closeForm();
    }
});

function deleteBook(parentID){
    const element = document.getElementById(parentID);
    element.remove();

    //Extrapolate index of the book with the parentID
    parentID = parentID.replace("book", "");
    //Using splice method to remove at the index
    myLibrary.splice(parentID,1);
}

function openForm(){
    document.getElementById("addBookForm").style.display = "block"
}

function closeForm(){
    document.getElementById("addBookForm").style.display = "none"
}

function getFormContents(form){
    const newBook = new Book(form.elements[1].value,form.elements[2].value, form.elements[3].value, form.elements[4].value);
    myLibrary.push(newBook);
    
    const library = document.getElementById("libraryContainer");
    const bookContainer = document.createElement("book" + (myLibrary.length-1).toString());
    bookContainer.id = "book" + (myLibrary.length-1).toString();
    bookContainer.style.display = "flex";
    bookContainer.style.flexDirection = "column";
    bookContainer.style.alignContent = "center";
    bookContainer.style.justifyContent = "center";
    bookContainer.style.color = "purple";
    bookContainer.style.backgroundColor = "gold";
    bookContainer.style.border = "solid black";

    const newTitle = document.createElement("title" + (myLibrary.length-1).toString());
    bookContainer.style.display = "flex";
    newTitle.textContent = newBook.title;
    bookContainer.appendChild(newTitle);

    const newAuthor = document.createElement("author" + (myLibrary.length-1).toString());
    bookContainer.style.display = "flex";
    newAuthor.textContent = newBook.author;
    bookContainer.appendChild(newAuthor);

    const button = document.createElement("button");
    button.textContent = "Delete";
    bookContainer.appendChild(button);
    button.addEventListener('click',function(e){
        //Get id of the parent node of the clicked button
        deleteBook(e.target.parentNode.id);
    })

    library.appendChild(bookContainer)
    document.getElementById("addBookForm").reset();
    closeForm();
}


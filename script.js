let myLibrary = [];

const bookForm = document.getElementById("addBookForm")
const library = document.getElementById("libraryContainer");

function localSave(){
    //Load existing library
}

function initialPrint(){
    //Iterate myLibrary objects and add to the library container
    Object.keys(myLibrary).forEach(function(book){
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
    });
}

function Book(title,author,pages,currentPage){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.currentPage = currentPage;
}

function addBooktoLibrary(book){
    myLibrary.push(book);
}

const addButton = document.getElementById("addBookBtn");
addButton.addEventListener('click', function(e){
    if(bookForm.style.display != "block"){
        openForm();
    }else if (bookForm.style.display == "block"){
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
    bookForm.style.display = "block"
}

function closeForm(){
    bookForm.reset();
    document.getElementById("add").disabled = true;
    bookForm.style.display = "none"
}
const closeButton = document.getElementById("closeBtn")
closeButton.addEventListener(`click`, function(e){
    closeForm();
})
function getFormContents(form){
    if(form.elements[4].value == ""){
        form.elements[4].value = 0
    }
        const newBook = new Book(form.elements[1].value,form.elements[2].value, form.elements[3].value, form.elements[4].value);
        myLibrary.push(newBook);
        
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
        newTitle.textContent = newBook.title;
        bookContainer.appendChild(newTitle);
    
        const newAuthor = document.createElement("author" + (myLibrary.length-1).toString());
        newAuthor.textContent = newBook.author;
        bookContainer.appendChild(newAuthor);

        const newPages= document.createElement("pages" + (myLibrary.length-1).toString());
        newPages.textContent = newBook.pages;
        bookContainer.appendChild(newPages);

        const newCurrentPage = document.createElement("cPages" + (myLibrary.length-1).toString());
        newCurrentPage.textContent = newBook.currentPage;
        bookContainer.appendChild(newCurrentPage);
    
        const button = document.createElement("button");
        button.textContent = "Delete";
        bookContainer.appendChild(button);
        button.addEventListener('click',function(e){
        //Get id of the parent node of the clicked button
        deleteBook(e.target.parentNode.id);
        })
        library.appendChild(bookContainer)
        closeForm();         
}

let titleInput = document.getElementById("bookTitleInput");
let authorInput = document.getElementById("bookAuthorInput");
let pagesInput = document.getElementById("bookPagesInput");

titleInput.addEventListener(`keyup`, function(e){
    if(titleInput.value != "" && authorInput.value != "" && pagesInput.value != ""){
        document.getElementById("add").disabled = false;
    }else{
        document.getElementById("add").disabled = true;
    }
})

authorInput.addEventListener(`keyup`, function(e){
    if(titleInput.value != "" && authorInput.value != "" && pagesInput.value != ""){
        document.getElementById("add").disabled = false;
    }else{
        document.getElementById("add").disabled = true;
    }
})

pagesInput.addEventListener(`keyup`, function(e){
    if(titleInput.value != "" && authorInput.value != "" && pagesInput.value != ""){
        document.getElementById("add").disabled = false;
    }else{
        document.getElementById("add").disabled = true;
    }
})



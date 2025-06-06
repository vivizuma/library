// book object constructor

function BookConstructor(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// demo library data
let myLibrary = [
  { title: "Seveneves", author: "Neil Stephenson", pages: 872, read: false },
  { title: "Hyperion", author: "Dan Simmons", pages: 500, read: true },
  {
    title: "The Death of Ivan  Illych",
    author: "Leo Tolstoy",
    pages: 68,
    read: true,
  },
];
// add book
const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", () => {
  openBookModal();
});
function openBookModal() {
  let modal = document.getElementById("add-book-modal");
  modal.style.display = "block";
  //on click: render modal, create form, on submit call addBookToLibrary()
}
const closeModal = document.querySelector(".close");
closeModal.addEventListener("click", () => {
  closeBookModal();
});

const submitBtn = document.querySelector(".submit-book");
submitBtn.addEventListener("click", () => {
  submitBook();
});

function removeBook(target) {
  myLibrary.splice(target, 1);
  updateLibraryView();
}

function toggleReadStatus(bookIndex) {
  switch (myLibrary[bookIndex].read) {
    case true:
      myLibrary[bookIndex].read = false;
      break;
    case false:
      myLibrary[bookIndex].read = true;
      break;
  }
  updateLibraryView();
}

function submitBook() {
 

  let bookTitle = document.getElementById("book_title").value;
  let bookAuthor = document.getElementById("book_author").value;
  let bookPages = document.getElementById("book_pages").value;
  let readStatus = document.getElementById("read_status").checked;

  const errorMsg = document.getElementById("err");

  if (bookTitle.length > 2 && bookAuthor.length > 2) {
 
    const book = new BookConstructor(
      bookTitle,
      bookAuthor,
      bookPages,
      readStatus
    );

    myLibrary.push(book);
    updateLibraryView();
    resetModalForm();
    closeBookModal();
    errorMsg.classList.remove("error-active");
    errorMsg.classList.add("error-hidden");
  } else {
    console.log("invalid inputs");

    errorMsg.classList.remove("error-hidden");
    errorMsg.classList.add("error-active");
  }
}

function resetModalForm() {
  // get inner text of form
  const titleField = document.getElementById("book_title");
  const authorField = document.getElementById("book_author");
  const pageField = document.getElementById("book_pages");
  const readCheckbox = document.getElementById("read_status");

  titleField.value = "";
  authorField.value = "";
  pageField.value = "";
  readCheckbox.checked = "";
}
function closeBookModal() {
  let modal = document.getElementById("add-book-modal");
  modal.style.display = "none";
}
//target delete button
// const deleteKey =
const db = {
 getBooks: ()=>{
  
 }
}
function updateLibraryView() {
  const cards = document.querySelector(".cards");
  cards.innerHTML = "";
  let i = 0;
  myLibrary.forEach((book) => {
    // create card div, append as child of card container, populate card div with
    // p> for title, author, pages, read status

    // TODO
    // delete btn
    // add event listener on each delete btn. when pressed, find index
    //of current card, search in myLibrary for index, delete parent and children of div

    //read button status toggle
    //on click, if read = true, set false, if false, set true. Switch?

    //erase any HTML inside of book-card div
    //create new elements for cards and assign them to variables
    const bookCard = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const readBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    //TODO READ or UNREAD BUTTON
    //add classnames to variables for styling
    bookCard.classList.add("book-card");
    deleteBtn.classList.add("btn-delete");

    //append new elements to desired area of DOM hierarchy
    cards.appendChild(bookCard);

    title.textContent = `${book.title}`;
    title.classList.add("book-title");
    author.textContent = `by ${book.author}`;
    author.classList.add("book-author");
    pages.textContent = ` ${book.pages} pages`;
    pages.classList.add("book-pages");

    //if read status = True, render a green button,
    //if read status = false, render a red button
    if (book.read === true) {
      readBtn.classList.add("read");
      readBtn.innerText = "Read";
      // readBtn.setAttribute("id", "readToggleOn");
    } else {
      readBtn.classList.remove("btn-read");
      readBtn.classList.add("unread");
      readBtn.innerText = "Unread";
      // readBtn.setAttribute("id", "readToggleOff");
    }

    deleteBtn.innerText = "Delete";

    cards.appendChild(bookCard);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(deleteBtn);
    //set index attribute for each card as "data-index"
    readBtn.setAttribute("read-index", i);
    bookCard.setAttribute("data-index", i);
    deleteBtn.setAttribute("delete-index", i);
    // use index attribute to find and target book for deletion
    deleteBtn.addEventListener("click", () => {
      console.log(deleteBtn.getAttribute("delete-index"));
      let tgt = deleteBtn.getAttribute("delete-index");
      removeBook(tgt);
    });
    //event listener to read status, get index and call toggleReadStatus()
    readBtn.addEventListener("click", () => {
      let bookStatusTgt = readBtn.getAttribute("read-index");
      toggleReadStatus(bookStatusTgt);
    });

    i++;
    //delete button
  });

  // the array as cards, style each (style as prototype?)
}
//remove book from library

//TODO LATER @@@@@@
function ratingSlider() {}

updateLibraryView();

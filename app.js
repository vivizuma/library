function BookConstructor(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    const infoVar = `"${title}, ${pages} pages, status:${read}"`;
    console.log(infoVar);
    return infoVar;
  };
}

const book = new BookConstructor("The Hobbit", "J.R.R Tolkein", "295", "read");
console.log(book.title);
console.log(book.info());

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
//UI

const addBookButton = document.getElementById("addBookButton");
addBookButton.pnclick = openBookModal();
function addBookToLibrary() {
  //TODO
  //submit, update myLibrary
}

function openBookModal() {
  //on click: render modal, create form, on submit call addBookToLibrary()
}
function submitBook() {}
function closeBookModal() {}

function toggleReadStatus() {
  const toggleBtn = document.querySelector();
}
function updateLibraryView() {
  const cards = document.querySelector(".cards");
  cards.innerHTML = "";
  myLibrary.forEach((book) => {
    // create card div, append as child of card container, populate card div with
    // p> for title, author, pages, read status

    // TODO
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
    title.classList.add("bold-text");
    author.textContent = `by ${book.author}`;
    pages.textContent = ` ${book.pages} pages`;

    //if read status = True, render a green button,
    //if read status = false, render a red button
    if (book.read === true) {
      readBtn.classList.add("btn-read");
      readBtn.innerText = "Read";
      readBtn.setAttribute("id", "readToggleOn");
    } else {
      readBtn.classList.remove("btn-read");
      readBtn.classList.add("btn-unread");
      readBtn.innerText = "Unread";
      readBtn.setAttribute("id", "readToggleOff");
    }

    deleteBtn.innerText = "Delete";

    console.log(book.title);
    cards.appendChild(bookCard);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(deleteBtn);

    //buttons  TODO REVISE
  });

  // the array as cards, style each (style as prototype?)
}

//TODO LATER @@@@@@
function ratingSlider() {}

updateLibraryView();

updateLibraryView();

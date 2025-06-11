// book object constructor

class Book{
  constructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}
// library storage in state 
let myLibrary = [
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
  myLibrary.splice(target, 1)
  saveDb()
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
  saveDb()
  updateLibraryView();
}

function submitBook() {
 
  let bookTitle = document.getElementById("book_title").value;
  let bookAuthor = document.getElementById("book_author").value;
  let bookPages = document.getElementById("book_pages").value;
  let readStatus = document.getElementById("read_status").checked;

  const errorMsg = document.getElementById("err");

  if (bookTitle.length > 2 && bookAuthor.length > 2) {
 
    const book = new Book(
      bookTitle,
      bookAuthor,
      bookPages,
      readStatus
    );

    myLibrary.push(book);
    saveDb()
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
  saveDb()
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
  
function updateLibraryView() {
  const cards = document.querySelector(".cards");
  cards.innerHTML = "";
  let i = 0;
  myLibrary.forEach((book) => {

    const bookCard = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const readBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    //TODO READ or UNREAD BUTTON

    bookCard.classList.add("book-card");
    deleteBtn.classList.add("btn-delete");

    cards.appendChild(bookCard);

    title.textContent = `${book.title}`;
    title.classList.add("book-title");
    author.textContent = `by ${book.author}`;
    author.classList.add("book-author");
    pages.textContent = ` ${book.pages} pages`;
    pages.classList.add("book-pages");

// isRead status
    if (book.read === true) {
      readBtn.classList.add("read");
      readBtn.innerText = "Read";
     
    } else {
      readBtn.classList.remove("btn-read");
      readBtn.classList.add("unread");
      readBtn.innerText = "Unread";
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
  });

}

//TODO LATER @@@@@@
function ratingSlider() {}

function isDb(){
  if(localStorage.getItem("books") === null){
    console.log("db is empty")
    return false
    
  }
  return true
}
function saveDb(){
  const myLibraryCopy = [...myLibrary]
  localStorage.setItem("books", "")
  localStorage.setItem("books", JSON.stringify(myLibraryCopy))

}
function loadDb(){  
  const books = localStorage.getItem("books")
  if(books !== null){
    
  console.log("loading db .. ")
  myLibrary = JSON.parse(localStorage.getItem("books"))
  }
}
const init = () => {
  if(isDb() === true){
    loadDb()
    console.log("db exists, loading db and awaiting changes")
  }
  else {
    console.log("db does not yet exist. creating empty db entry 'books'")

  }

updateLibraryView();
}

init()

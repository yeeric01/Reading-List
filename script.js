//modal feature
let addBook = document.querySelector(".addButton");
let modal = document.querySelector(".modal");
addBook.addEventListener("click", ()=>modal.style.display="block");
let closePopup = document.querySelector(".close");
closePopup.addEventListener("click", ()=>modal.style.display="none");


//add feature
let myLibrary = [];
function Book(title, author, read) {
    title = title;
    author = author;
    read = read;
}
let submit = document.querySelector(".submit");
//submit.addEventListener("click", addBookToLibrary);
function addBookToLibrary(){
    let title = document.querySelector(".title").value;
    let author= document.querySelector(".author").value;
    let read = document.querySelector(".read").value;
    console.log(title+author+read);
    //modal.style.display="none"
}
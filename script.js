//modal feature
let addBook = document.querySelector(".addButton");
let modal = document.querySelector(".modal");
addBook.addEventListener("click", ()=>modal.style.display="block");
let closePopup = document.querySelector(".close");
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
}
closePopup.addEventListener("click", ()=>modal.style.display="none");

//add feature
let myLibrary = [];
let numBooks = 0;
let tmpBook;
function Book() {
    this.title = document.querySelector(".title").value;
    this.author = document.querySelector(".author").value;
    this.read = document.querySelector(".read").checked;
    this.index = numBooks;
}
let submit = document.querySelector(".submit");
submit.addEventListener("click", addBookToLibrary);
function addBookToLibrary(){
    let tmpBook = new Book();
    myLibrary.push(tmpBook);
    numBooks++;
    console.log(myLibrary.length);
    modal.style.display="none"
    draw();
}

/*draw books in array to the web page*/
let body = document.querySelector("body");
function draw(){
    let cards = document.querySelector(".cards");
    if(cards)
        cards.remove();

    cards = document.createElement("div");
    cards.classList.add("cards");
    body.appendChild(cards);

    for(let i = 0; i < myLibrary.length; i++){
        if(!myLibrary[i])
            continue;   
        let t = myLibrary[i].title;
        let a = myLibrary[i].author;
        let r = myLibrary[i].read;
        let index = myLibrary[i].index;

        let div = document.createElement("div");
        let p1 = document.createElement("div");
        let p2 = document.createElement("div");
        let p3 = document.createElement("div");
        let remove = document.createElement("button");

        p1.innerHTML=t;
        p2.innerHTML=a;
        p3.innerHTML=r;
        remove.innerHTML="remove";

        /*remove button*/
        remove.addEventListener("click", ()=>{
            cards.removeChild(div)
            delete myLibrary[index];
        });

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(remove);
        div.classList.add("card");
        cards.appendChild(div);
    }
}
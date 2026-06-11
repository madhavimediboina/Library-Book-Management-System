function addBook() {

let book = document.getElementById("bookName").value;

if(book==""){
alert("Enter Book Name");
return;
}

let li = document.createElement("li");

li.innerHTML =
book +
" <button onclick='editBook(this)'>Edit</button>" +
" <button onclick='deleteBook(this)'>Delete</button>";

document.getElementById("bookList").appendChild(li);

document.getElementById("bookName").value="";
}

function deleteBook(btn){
btn.parentElement.remove();
}

function editBook(btn){
let newBook = prompt("Enter new book name");

if(newBook){
btn.parentElement.childNodes[0].textContent = newBook + " ";
}
}

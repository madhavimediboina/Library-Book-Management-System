function addBook(){

let book=document.getElementById("bookName").value;

if(book==""){
alert("Enter Book Name");
return;
}

let li=document.createElement("li");
li.innerText=book;

document.getElementById("bookList").appendChild(li);

document.getElementById("bookName").value="";
}
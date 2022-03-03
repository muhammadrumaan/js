
let tBody=document.getElementById('tbody');
tBody.innerHTML= localStorage.getItem('tbody') || "";

// making a book constructor function to make books

function BookMaker(bookName,authorName,type){
    this.name=bookName;
    this.author=authorName;
    this.type=type;
}


//making an event listener for form submit
let myForm=document.getElementById('myform');
myForm.addEventListener('submit',addMyBook);
function addMyBook(e){
    let bookName=document.getElementById('bookname').value;
    let authorName=document.getElementById('authorname').value;
    let fiction=document.getElementById('fiction');
    let programming=document.getElementById('programming');
    let cooking=document.getElementById('cooking');
    let type;

    if(fiction.checked){
        type=fiction.value;
    }else if(programming.checked){
        type=programming.value;
    }else{
        type=cooking.value;
    }


    console.log(bookName);
    console.log(authorName);
    console.log(type);
    
    let book=new BookMaker(bookName,authorName,type);
    console.log(book);
    
    let tBody=document.getElementById('tbody');
    
    tBody.innerHTML+= 
    ` <tr>
          <td>${book.name}</td>
          <td>${book.author}</td>
          <td>${book.type}</td>
       </tr>`;

    localStorage.setItem('tbody',tBody.innerHTML);
   

   //Book added succesfullu message

    let message=document.getElementById('message');
    message.innerHTML=`<div class="alert alert-success alert-dismissible fade show" role="alert">
                         <strong>Hurrayy!</strong> Your Book is added successfully.
                         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                       </div>`;
    setTimeout(() => {
        message.innerHTML="";
    }, 2000);


    
    myForm.reset();                   
    e.preventDefault();
}   
/** 
//book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
//UI constructor
function UI() {}
UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');
    //create tr element
    const row = document.createElement('tr');
    //insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
}
//error alert
UI.prototype.showElert = function (message, className) {
    //create div
    const div = document.createElement('div');
    //add className
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div, form);
    //timeout after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 2000);

}
//UI delete books
UI.prototype.deleteBooks = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();

    }
}
//clear input fields
UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}


// Event listeners

document.getElementById('book-form').addEventListener('submit', function (e) {
    //get form values 
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value
    // console.log(title, author, isbn);
    // instantiate book
    const book = new Book(title, author, isbn);
    //instantiate UI
    const ui = new UI();
    if (title === '' || author === '' || isbn === '') {
        //error alert
        ui.showElert('Pls fill the input fields', 'error');
    } else {
        //add book to list
        ui.addBookToList(book);
        //show succes alert
        ui.showElert('Inset success', 'success');
        //clear input fields
        ui.clearFields();
    }
    e.preventDefault();
});
//delete items
document.getElementById('book-list').addEventListener('click', function (e) {

    const ui = new UI;
    ui.deleteBooks(e.target);
    e.preventDefault();
});
*/

////////////////////////////////////////////////////Practice///////////////////////////////////////////////////////////////////////////////

//book constructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;

}

//ui constructor

function UI() {}
//add books 

//show alert function 
UI.prototype.showAlert = function (message, errorClassName) {
    //create div 
    const div = document.createElement('div');
    div.className = `alert ${errorClassName}`;
    div.appendChild(document.createTextNode(message));
    //get parent 
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 1000);
}
//add book list
UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    //insert into cols
    row.innerHTML =
        `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`
    list.appendChild(row);
}
//clear value input
UI.prototype.clearValue = function () {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
}

//event listeners

document.getElementById('book-form').addEventListener('submit', function (e) {
    //get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
    console.log(title, author, isbn);
    //book constructor instantiate
    const book = new Book(title, author, isbn);
    //UI constructor instantiate
    const ui = new UI;

    if (title === '' || author === '' || isbn === '') {
        //error alert
        ui.showAlert('Please fill all info', 'error');
    } else {
        ui.showAlert('Book added success', 'success');
        ui.addBookToList(book);
        ui.clearValue();
    }
    e.preventDefault();

});
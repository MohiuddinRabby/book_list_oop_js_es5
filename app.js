//Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
//UI constructor
function UI() {}
UI.prototype.showAlert = function (message, messageClassName) {
    const div = document.createElement('div');
    div.className = `alert alert-${messageClassName}`;
    div.appendChild(document.createTextNode(message));
    //get parent 
    const container = document.querySelector('.col');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    //setTimeOut
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 2000);

}
//add book to list
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
//clear input field
UI.prototype.clearInput = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}
//event listener

document.getElementById('book-form').addEventListener('submit', function (e) {

    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    ///////////////
    const book = new Book(title, author, isbn);
    const ui = new UI();
    ///////////////

    if (title == '' || author == '' || isbn == '') {
        ui.showAlert('Please fill all input', 'danger');
    } else {
        ui.showAlert('Inserted success', 'success');
        ui.addBookToList(book);
        ui.clearInput();
    }
    e.preventDefault();
});
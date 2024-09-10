const myLibrary = [];
const main = document.querySelector('.main');
const lib = document.querySelector('.library');
const form = document.querySelector('form');
const addBook = document.querySelector('.addBook');
const dialog = document.querySelector('dialog');
const newTitle = document.querySelector('#bookTitle');
const newauthor = document.querySelector('#bookAuthor');

addBook.addEventListener('click',  () => {
    dialog.showModal();
})

function Book(title, author) {
    this.title = title;
    this.author = author;
}

const createBook = (title, author) => {
    const newBook = new Book(title, author);
    myLibrary.push(newBook)
};

const addBooksToShelf = () => {
    
    while (lib.children.length > 1) {
        lib.removeChild(lib.lastChild);
    }

    myLibrary.forEach((libBook) => {
        const cover = document.createElement('div');
        cover.classList.add('cover');
        lib.appendChild(cover);

        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = `Title: ${libBook.title}`;
        cover.appendChild(title);

        const author = document.createElement('div');
        author.classList.add('author');
        author.textContent = `Author: ${libBook.author}`;
        cover.appendChild(author);    

    })
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    createBook(newTitle.value, newauthor.value);

    addBooksToShelf()
    dialog.close()

})

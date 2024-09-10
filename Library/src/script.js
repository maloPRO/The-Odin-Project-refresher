const myLibrary = [];
const main = document.querySelector('.main');
const lib = document.querySelector('.library');
const form = document.querySelector('form');
const addBook = document.querySelector('.addBook');

addBook.addEventListener('click',  () => {
    form.classList.remove('invisible');
    form.classList.add('visible')
})

function Book(title, author) {
    this.title = title;
    this.author = author;
}

const addBooksToShelf = () => {
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
    form.classList.remove('visible');
    form.classList.add('invisible');

    let title = document.getElementById('bookTitle');
    let author = document.getElementById('bookAuthor');

    const addedBook = new Book(title.value, author.value);

    myLibrary.push(addedBook);

    addBooksToShelf()

    console.log(myLibrary.length)

})
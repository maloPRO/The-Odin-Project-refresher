const myLibrary = [{title: 'Harry Potter', author: 'JK Rowlings'}, {title: 'Harry Potter 2', author: 'JK Rowlings'}, {title: 'Harry Potter 3', author: 'JK Rowlings'}, ];
const lib = document.querySelector('.library');

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary() {
    const  title = prompt('Enter Book Title');
    const author = prompt('Enter book Author');

    const newBook = new Book(title, author);
    myLibrary.push(newBook);
    
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

addBookToLibrary()
addBooksToShelf()
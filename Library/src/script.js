let myBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
const main = document.querySelector('.main');
const library = document.querySelector('.library');
const form = document.querySelector('form');
const addBook = document.querySelector('.addBook');
const dialog = document.querySelector('dialog');
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const pageInput = document.querySelector('#pageInput');
const statusInput = document.querySelector('#statusInput');

addBook.addEventListener('click',  () => {
    dialog.showModal();
})

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

const createBook = (title, author, pages, status) => {
    const newBook = new Book(title, author, pages, status);
    myBooks.push(newBook);
    localStorage.setItem('savedBooks', JSON.stringify(myBooks))
};

const addBooksToShelf = () => {

    while (library.children.length > 0) {
        library.removeChild(library.lastChild);
    }

    myBooks.forEach((book, index) => {
        const cover = document.createElement('div');
        cover.classList.add('cover');
        cover.id = `${index + 1}`
        library.appendChild(cover);

        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = `Title: ${book.title}`;
        cover.appendChild(title);

        const author = document.createElement('div');
        author.classList.add(`author`);
        author.textContent = `Author: ${book.author}`;
        cover.appendChild(author); 

        const pages = document.createElement('div');
        pages.classList.add(`pages`);
        pages.textContent = `Pages: ${book.pages}`;
        cover.appendChild(pages);  

        const btnCont = document.createElement('div');
        btnCont.classList.add('btnContainer');
        cover.appendChild(btnCont);

        const toggle = document.createElement('div');
        toggle.innerHTML = `<label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>`

        btnCont.appendChild(toggle);

        const del = document.createElement('button');
        del.textContent = 'Delete';
        del.classList.add('delBtn')
        btnCont.appendChild(del);

        del.addEventListener('click', () => {
            const parent = del.parentElement
            parent.parentElement.remove();

            myBooks.forEach((book, idx) => {
                myBooks.splice(idx, 1);
                localStorage.setItem('savedBooks', JSON.stringify(myBooks))
            })
        })

    })

    library.appendChild(addBook);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    createBook(titleInput.value, authorInput.value, pageInput.value, statusInput.value);
    addBooksToShelf()
    form.reset()
    dialog.close()
})

window.addEventListener('load', addBooksToShelf)
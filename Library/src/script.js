let myBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
const main = document.querySelector('.main');
const library = document.querySelector('.library');
const form = document.querySelector('form');
const addBook = document.querySelector('.addBook');
const dialog = document.querySelector('dialog');
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');

addBook.addEventListener('click',  () => {
    dialog.showModal();
})

function Book(title, author) {
    this.title = title;
    this.author = author;
}

const createBook = (title, author) => {
    const newBook = new Book(title, author);
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
        
        const del = document.createElement('button');
        del.textContent = 'Delete';
        del.classList.add('delBtn')
        cover.appendChild(del);

        del.addEventListener('click', () => {
            del.parentElement.remove();

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

    createBook(titleInput.value, authorInput.value);
    addBooksToShelf()
    form.reset()
    dialog.close()

})

const savedBooks = () => {
    let savedItems = JSON.parse(localStorage.getItem('savedBooks'));
    myBooks = savedItems;
    addBooksToShelf()
}


window.addEventListener('load', savedBooks)
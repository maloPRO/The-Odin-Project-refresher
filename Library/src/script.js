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

    while (lib.children.length > 0) {
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
        
        const del = document.createElement('button');
        del.textContent = 'Delete';
        del.classList.add('delBtn')
        cover.appendChild(del);

        del.addEventListener('click', () => {
            const delItem = del.parentNode;
            lib.removeChild(delItem)
        })

    })

    lib.appendChild(addBook);

}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    createBook(newTitle.value, newauthor.value);

    addBooksToShelf()
    form.reset()
    dialog.close()

})

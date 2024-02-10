const BOOK_API = 'http://localhost:3000/api/books';
const booksContainer = document.querySelector('.books .container');
export {} from 'slider.js';
const state = {
  books: [
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  //   {
  //     id: 1, 
  //     name: "Clean Architecture",
  //     nme: "Clearn Architecture",
  //     descirption: "Clearn Architecture", 
  //     price: 300,
  //   },
  ],features: [
    {
      id: 1, 
      name: "Clean Architecture",
      nme: "Clearn Architecture",
      descirption: "Clearn Architecture", 
      price: 300,
    },
  {
      id: 1, 
      name: "Clean Architecture",
      nme: "Clearn Architecture",
      descirption: "Clearn Architecture", 
      price: 330,
    },
    {
      id: 3, 
      name: "Groking Algorithms",
      nme: "Groking",
      descirption: "Grokking Algorithms", 
      price: 500,
    },
    {
      id: 4, 
      name: "Cracking the coding interview",
      nme: "Cracking the coding interview",
      descirption: "Cracking the coding interview", 
      price: 250,
    },
  ]
};




async function getBooks(url) {
  try {
    const res = await fetch(url);
    console.log(res);
    const {data} = await res.json();
    console.log('this is data', data);
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    state.books = data.books;
    console.log(state.books);
  } catch (err) {
    console.log(err.message);
  }
}

function renderBooks() {
  const markup = state.books
    .map((book) => {
      return `
      <article class="book">
        <div class="image">
          <a href="#${book.id}">
            <img src="book2.jpg" alt="${book.descirption}">
          </a>
        </div>
        <div class="book-info">
          <h3><a href="#${book.id}" class="title">${book.name}</a></h3>
          <span class="book-price">${book.price}</span>
        </div>
      </article>


    `;
    })
    .join('\n');

  booksContainer.insertAdjacentHTML('afterbegin', markup);
}

async function init() {
  window.addEventListener('DOMContentLoaded', async function () {
    await getBooks(BOOK_API);
    renderBooks();
  });
}

init();

// Iteration 1 | Books Array

// Book 1
const book1 = {
  title: "The Old Man and the Sea",
  pages: 128,
  author: "Ernest Hemingway",
  details: {
     language: "English",
     description: "One of Hemingway's most famous works, it tells the story of Santiago..."
  }
};

// Book 2
const book2 = {
  title: "The Airbnb Story",
  pages: 256,
  author: "Leight Gallagher",
  details: {
     language: "English",
     description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb..."
  }
};

// Book 3
const book3 = {
  title: "Educated - A Memoir",
  pages: 352,
  author: "Tara Westover",
  details: {
     language: "English",
     description: "Educated is an account of the struggle for self-invention..."
  }
};

// Book 4
const book4 = {
  title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: {
     language: "English",
     description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure."
  }
};


// Your code here:
const booksArray = [];
booksArray.push(book1, book2, book3, book4);


// Iteration 2 | Book Details
function getBookDetails(bookObj) {
  // Your code here:
  return `${bookObj.title} - ${bookObj.author} - ${bookObj.pages} pages`; 
}


// Iteration 3 | Delete Language
// Your code here:
booksArray.forEach(book => delete book.details.language);


// Iteration 4 | Estimated Reading Time
// Your code here:

//Option with for:
/* for (let i = 0; i < booksArray.length; i++) {
  booksArray[i].readingTime = Math.ceil((booksArray[i].pages * 500)/90);
} */

//Option with forEach:
booksArray.forEach(book => {
  book.readingTime = Math.ceil((book.pages * 500)/90);
});

//console.log(booksArray);

// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionary = {
    "J. K. Rowling": [
        ["Harry Potter and the Philosopher's Stone", 223],
        ["Harry Potter and the Chamber of Secrets", 251],
        ["Harry Potter and the Prisoner of Azkaban", 317],
        ["Harry Potter and the Goblet of Fire", 636],
    ],
    "Neal Stephenson": [
        ["Cryptonomicon", 928],
        ["Anathem", 1008],
        ["Fall; or, Dodge in Hell", 896],
    ],
    "Malcolm Gladwell": [
        ["Outliers", 320],
        ["Blink", 287],
    ],
};

//console.log(Object.keys(dictionary));
 
function booksByAuthor(dictionaryObj) {
  let bookObjectsArray = [];
  for (let i = 0; i < Object.keys(dictionaryObj).length; i++) {
    for (let j = 0; j < dictionaryObj[Object.keys(dictionaryObj)[i]].length; j++) {
      let newBookObject = {
        title: dictionaryObj[Object.keys(dictionaryObj)[i]][j][0],
        pages: dictionaryObj[Object.keys(dictionaryObj)[i]][j][1],
        author: Object.keys(dictionaryObj)[i]
      } 
      bookObjectsArray.push(newBookObject);
    }
  }
  return bookObjectsArray;
}

//console.log(booksByAuthor(dictionary));

//Another way to do this iteration. Save in variables authors and books, use .map and spread operator instead of .push 
/* function booksByAuthor(dictionaryObj) {
  let bookObjectsArray = [];
  for (let i = 0; i < Object.keys(dictionaryObj).length; i++) {
    let author = Object.keys(dictionaryObj)[i];
    let books = dictionaryObj[author].map(book => ({
      title: book[0],
      pages: book[1],
      author: author
    }));
    bookObjectsArray = [...bookObjectsArray, ...books];
  }
  return bookObjectsArray;
} */

//console.log(booksByAuthor(dictionary));

// Bonus: Iteration 6 | Average Page Count
function averagePageCount(booksArray) {
  const avgPages = booksArray.reduce((acc, currentBook) => acc + currentBook.pages, 0) / booksArray.length;
  return avgPages;
}



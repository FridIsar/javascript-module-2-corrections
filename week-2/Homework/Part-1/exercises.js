/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  arrayOfPeople.forEach(person => {
    const h1 = document.createElement('h1')
    h1.innerText = person.name
    const h2 = document.createElement('h2')
    h2.innerText = person.job
    let content = document.querySelector("#content");
    content.appendChild(h1)
    content.appendChild(h2)
  })

}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */

function exerciseTwo(shopping) {
  const list = document.createElement('ul')
  shopping.forEach(item => {

    const listItem = document.createElement('li')
    listItem.innerText = item
    list.appendChild(listItem)

  })
  const content = document.querySelector('#content')
  content.appendChild(list)
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  const content = document.querySelector('#content')
  const h1 = document.createElement('h1')
  h1.innerText = 'Book List'
  content.appendChild(h1)

  const bookList = document.createElement('ul')

  books.forEach(book => {

    const p = document.createElement('p')
    p.innerText = `${book.title} - ${book.author}`
    const image = document.createElement('img')
    image.src = book.cover
    const listItem = document.createElement('li')
    listItem.appendChild(p)
    listItem.appendChild(image)
    bookList.appendChild(listItem)
    if (book.alreadyRead) {
      listItem.style.backgroundColor = "green"
    } else {
      listItem.style.backgroundColor = "red"
    }
  })

  content.appendChild(bookList)

}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    cover: "data:image/jpeg;base64,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",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    cover: "data:image/jpeg;base64,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",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    cover: "data:image/jpeg;base64,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",
    alreadyRead: true
  }
];

exerciseThree(books);

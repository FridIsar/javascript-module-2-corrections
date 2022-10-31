/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function
const moviesId = document.querySelector("#all-movies")

function showMovies(MoviesList){
  // Creating P Elements according to the given properties of the objects
   const createP = (list) =>{
    const p = document.createElement("p");
    p.innerHTML = list;
    return p
   }
   // Selecting Id
  // Creating map function
  const moviesElements = MoviesList.map((e) => createP(`${e.title} - ${e.director}`))
  // appending each node of map function to the id 
  moviesElements.forEach((node) => moviesId.appendChild(node));

  // selecting movies number id

  const moviesNumber = document.querySelector("#movies-number")
 moviesNumber.innerHTML = MoviesList.length 
}
setTimeout(showMovies(movies),5000)


// create a new movie object for your favorite movie

function addMovies(movies){

}

// create addMovies function

const form = document.querySelector("form")

// creating div
const div = document.createElement("div")
const div2 = document.createElement("div")
div2.classList.add("button-div")
// creating input element
const input = document.createElement("input")
const input2 = document.createElement("input")
const input3= document.createElement("input")
const input4 = document.createElement("input")
//appending elements
div.appendChild(input)
div.appendChild(input2)
div.appendChild(input3)
div.appendChild(input4)
form.appendChild(div)

// creating button
const button = document.createElement("button");
button.setAttribute("name","Save")
button.innerText = "Save"
button.style.display ="flex"
button.style.height ="30px"
button.style.width ="100%"
button.style.justifyContent = "center"
button.style.backgroundColor = "#6363f1"
button.style.color = "#fff"

//styling div2
div.style.display ="flex"
div.style.justifyContent = "space-between"

form.appendChild(div2)
div2.appendChild(button)
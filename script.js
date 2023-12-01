// array of answer bank
const pokemonList = [
  // index: 0
  {
    name: "pikachu",
    imgSrc:
      "https://cdn.vox-cdn.com/thumbor/PqAwdNpc7p-5GUCSMxQPehSU-ck=/0x0:1920x1200/1200x800/filters:focal(810x375:1116x681)/cdn.vox-cdn.com/uploads/chorus_image/image/72524797/pikachu_artwork.0.jpg",
  },
  // index: 1
  {
    name: "togepi",
    imgSrc:
      "https://facts.net/wp-content/uploads/2023/07/16-facts-about-togepi-1689384445.jpg",
  },
  // index: 2
  {
    name: "electrode",
    imgSrc:
      "https://www.pcinvasion.com/wp-content/uploads/2023/01/pokemon-scarlet-violet-evolve-voltorb-into-electrode-result.jpg?fit=1200%2C675",
  },
];
// store index of random answer
const index = getRandomIndex(pokemonList);
// store answer
const answer = pokemonList[index].name;

// store div with id of app
const divApp = document.querySelector("#app");
displayH1(divApp);
displayRandomImg(divApp, pokemonList, index);
// const img = document.querySelector("img");

// amount of tries a user have to guess
let guessesLeft = 5;

// store user's guess
let userGuess = window.prompt(
  `Who's that Pokemon? You have ${guessesLeft} tries left`
);
// amount of tries user have

if (guessesLeft === 0) {
  window.alert("You lost :(");
} else {
  while (guessesLeft !== 0) {
    if (checkAnswer(userGuess, answer)) {
      window.alert("Correct");
      break;
    }
    guessesLeft--;
    userGuess = window.prompt(`Try again, you have ${guessesLeft} tries left.`);
  }
}

// console.log(img);

// img.style.filter = "blur(4px)";


// check if user is correct
function checkAnswer(userGuess, answer) {
  if (userGuess.toLowerCase() === answer) {
    return true;
  } else {
    return false;
  }
}

// display random image
function displayRandomImg(element, arr, index) {
  // create a new img tag
  const img = document.createElement("img");
  // make the img tag have an attribute src and make the src equals to the image source provided in the array
  img.setAttribute("src", arr[index].imgSrc);
  // add the img tag inside the element that you pass through
  element.appendChild(img);
}

function displayH1(element) {
  element.innerHTML = `<h1>Who's That Pokemon?</h1>`;
}

//get random index from array
function getRandomIndex(arr) {
  /*Use Math.random() to generate random number (returns a float, aka a number with decimal points)
   * Multiply Math.random() by array's length to pick a number from 0 to array's length-1 (still a float)
   * Use Math.floor to round it to the nearest whole number
   * Return that number so we can access a random element in the array.
   */
  return Math.floor(Math.random() * arr.length);
}

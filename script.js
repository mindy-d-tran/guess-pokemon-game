// array of answer bank
const pokemonList = [
    {
        name: "pikachu",
        imgSrc: 'https://cdn.vox-cdn.com/thumbor/PqAwdNpc7p-5GUCSMxQPehSU-ck=/0x0:1920x1200/1200x800/filters:focal(810x375:1116x681)/cdn.vox-cdn.com/uploads/chorus_image/image/72524797/pikachu_artwork.0.jpg'
    },
    {
        name: "togepi",
        imgSrc: 'https://facts.net/wp-content/uploads/2023/07/16-facts-about-togepi-1689384445.jpg'
    },
    {
        name: "electrode",
        imgSrc: 'https://www.pcinvasion.com/wp-content/uploads/2023/01/pokemon-scarlet-violet-evolve-voltorb-into-electrode-result.jpg?fit=1200%2C675'
    }
]
// store index of random answer
const index = getRandomIndex(pokemonList);
// store answer
const answer = pokemonList[index].name;

const divApp = document.querySelector("#app");
displayRandomImg(divApp, pokemonList, index);
const img = document.querySelector("img");

// amount of tries a user have to guess
let guessesLeft = 5;

// store user's guess
let userGuess = window.prompt(`Who's that Pokemon? You have ${guessesLeft} tries left`);
// amount of tries user have


while(guessesLeft !== 0){
    if(checkAnswer (userGuess, answer)) {
        window.alert("Correct");
        break;
    }
    guessesLeft--;
    userGuess = window.prompt(`Who's that Pokemon? You have ${guessesLeft} tries left`);
}

// console.log(img);

// img.style.filter = "blur(4px)";


// check if user is correct
function checkAnswer (userGuess, answer){
    if(userGuess.toLowerCase() === answer) {
        return true;
    } else {
        return false;
    }
}

// display random image
function displayRandomImg (element, arr, index){

    const img = document.createElement("img");
    
    
    img.setAttribute("src", arr[index].imgSrc);
    
    element.appendChild(img);
}

//get random index from array
function getRandomIndex(arr){
    return Math.floor(Math.random() * arr.length);
}
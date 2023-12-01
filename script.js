let userGuess = window.prompt("Who's that Pokemon?");

const pokemonList = [
    {
        name: "pikachu",
        imgSrc: 'https://cdn.vox-cdn.com/thumbor/PqAwdNpc7p-5GUCSMxQPehSU-ck=/0x0:1920x1200/1200x800/filters:focal(810x375:1116x681)/cdn.vox-cdn.com/uploads/chorus_image/image/72524797/pikachu_artwork.0.jpg'
    },
    {
        name: "eevee",
        imgSrc: 'https://facts.net/wp-content/uploads/2023/07/16-facts-about-togepi-1689384445.jpg'
    },
    {
        name: "electrode",
        imgSrc: 'https://www.pcinvasion.com/wp-content/uploads/2023/01/pokemon-scarlet-violet-evolve-voltorb-into-electrode-result.jpg?fit=1200%2C675'
    }
]
const index = getRandomIndex(pokemonList);

const answer = pokemonList[index].name;
const divApp = document.querySelector("#app");
displayRandomImg(divApp, pokemonList, index);
const img = document.querySelector("img");

// let isUserCorrect = false;

// while(isUserCorrect)
checkAnswer (userGuess, answer);
// console.log(img);

// img.style.filter = "blur(4px)";

function checkAnswer (userGuess, answer){
    if(userGuess.toLowerCase() === answer) {
        return window.alert("Correct");
    } else {
        return window.alert("Wrong");
    }
}

function displayRandomImg (element, arr, index){

    const img = document.createElement("img");
    
    
    img.setAttribute("src", arr[index].imgSrc);
    
    element.appendChild(img);
}

function getRandomIndex(arr){
    return Math.floor(Math.random() * arr.length);
}
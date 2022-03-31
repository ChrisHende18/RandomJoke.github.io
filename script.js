// get the joke container
const randJoke = document.getElementById("joke");
// get generate joke button
const btn = document.getElementById("btn");
// include the api for the jokes from another site
const api = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

//method 
let getJoke = () => {
    // remove joke-fade class from CSS
    randJoke.classList.remove("joke-fade");
    // fetch the joke from the API
    fetch(api) 
    // get the data fetch from API 
    .then(data => data.json())
    .then(item => {
        // display the joke from the API
        randJoke.textContent = `${item.joke}`;
        // add the joke-fade
        randJoke.classList.add("joke-fade");
    });
}
// add event to button
btn.addEventListener("click", getJoke);
// call the function
getJoke();
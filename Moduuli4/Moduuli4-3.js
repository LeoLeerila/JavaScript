'use strict';

const resultDiv = document.querySelector('#results')
const movieFormT3 = document.querySelector('#Moduuli4-3');
movieFormT3.addEventListener('submit', async function(evt) {
    // ... prevent the default action.
    evt.preventDefault();
    // get value of input element
    const searchParam = document.querySelector('input[name=qT3]').value;
    try {                                               // error handling: try/catch/finally
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchParam}`);    // starting data download, fetch returns a promise which contains an object of type 'response'
        const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
        MovieData(jsonData);    // log the result to the console
    } catch (error) {
        console.log(error.message);
    }
});

function MovieData(movieData){
    resultDiv.innerHTML = "";
    let article = document.createElement("article");
    
    let h2 = document.createElement("h2");
    h2.innerText = movieData[0].show.name;
    article.appendChild(h2);

    let url = document.createElement("a");
    url.setAttribute("target", "_blank");
    url.setAttribute("href", movieData[0].show.url);
    url.innerHTML = movieData[0].show.url;
    article.appendChild(url);

    let img = document.createElement("img");
    img.setAttribute("src", movieData[0].show.image?.medium);
    img.setAttribute("alt", movieData[0].show.name);
    article.appendChild(img);

    let summaryDiv = document.createElement("div");
    summaryDiv.innerHTML = movieData[0].show.summary;
    article.appendChild(summaryDiv);

    resultDiv.appendChild(article);
}
let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");
function createAndAppendSearchResults(result) {
    let {title, link, description} = result;
    // Result Item - Div Container
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultsEl.appendChild(resultItemEl);
    // Result title -  Anchor Title
    let resulTitleEl = document.createElement("a");
    resulTitleEl.classList.add("result-title");
    resulTitleEl.textContent = title;
    resulTitleEl.href = link;
    resulTitleEl.target = "_blank";
    resultItemEl.appendChild(resulTitleEl);
    // Title break
    let titleBrEl = document.createElement("br");
    resultItemEl.appendChild(titleBrEl);
    // Result url - Anchor URL 
    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);
    // Line Break 
    let lineBrEl = document.createElement("br");
    resultItemEl.appendChild(lineBrEl);
    // paragraph description - line - description
    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("line-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);
}

function displayResults(searchResults) {
    spinnerEl.classList.toggle("d-none");
    for (let result of searchResults) {
        createAndAppendSearchResults(result);
    }
}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.toggle("d-none");
        searchResultsEl.textContent = "";
        let searchInputValue = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputValue;
        let options = {
            method: "GET"
        };
        fetch(url, options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            let { search_results } = jsonData;
            displayResults(search_results);
        });
    }
}
searchInputEl.addEventListener("keydown", searchWikipedia);

let searchInputEL = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");


function createAndAppendSearchResult(result) {
  let { title, link, description } =  result;
  let resultsItemEl = document.createElement("div");
  resultsItemEl.classList.add("search-results");
  searchResultsEl.appendChild(resultsItemEl);

  let titleEl = document.createElement("a");
  titleEl.classList.add("result-title");
  titleEl.textContent = title;
  titleEl.href = link;
  titleEl.target = "_blank";
  resultsItemEl.appendChild(titleEl);

  let textBreakEl = document.createElement("br");
  resultsItemEl.appendChild(textBreakEl);

  let linkEL = document.createElement("a");
  linkEL.classList.add("result-url");
  linkEL.textContent = link;
  linkEL.href = link;
  linkEL.target = "_blank";
  resultsItemEl.appendChild(linkEL);

  let lineBreak = document.createElement("br");
  resultsItemEl.appendChild(lineBreak);

  let descriptionEl = document.createElement("p");
  descriptionEl.classList.add("link-description");
  descriptionEl.textContent = description;
  resultsItemEl.appendChild(descriptionEl);
}

function displayResults(search_results){
    spinnerEl.classList.toggle("d-none");
    for(let result of search_results){
        createAndAppendSearchResult(result);
    }
}


function search(event){
    if(event.key==="Enter"){
        spinnerEl.classList.toggle("d-none");
        searchResultsEl.textContent="";
        let searchVal = searchInputEL.value;
        let url = "https://apis.ccbp.in/wiki-search?search="+searchVal;
        let options={
            method:"GET"
        };
        fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            let {search_results}=jsonData;
            displayResults(search_results);
        })
    }    
}

searchInputEL.addEventListener("keydown",search);
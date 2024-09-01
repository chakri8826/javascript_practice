let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEL = document.getElementById("spinner");


function  createAndAppendSearchResult(result){
    let {title,link,description}=result;
    //1. Div Container -- result item
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultsEl.appendChild(resultItemEl);

    //2. anchor Title -- result-title
    let resutlTitleEl = document.createElement("a");
    resutlTitleEl.classList.add("result-title");
    resutlTitleEl.textContent = title;
    resutlTitleEl.href=link; 
    resutlTitleEl.target="_blank";
    resultItemEl.appendChild(resutlTitleEl);

    //3.Title Break
    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    //4. Anchor URL -- result URL
    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href=link;
    urlEl.target="_blank";
    urlEl.textContent=link;
    resultItemEl.appendChild(urlEl);

    //5 Line Break
    let lineBreakEl = document.createElement("br");
    resultItemEl.appendChild(lineBreakEl);

    //6. Paragraph Description -- link Description
    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent=description;
    resultItemEl.appendChild(descriptionEl);

}
function displayResults(searchResults){
    spinnerEL.classList.toggle("d-none");
    for(let result of searchResults){
        createAndAppendSearchResult(result);
    }
}


function searchWikipedia(event){
    if(event.key==="Enter"){
        searchResultsEl.textContent="";
        spinnerEL.classList.toggle("d-none");
        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search="+searchInput;
        let options={
            method:"GET"
        }
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
searchInputEl.addEventListener("keydown",searchWikipedia);





let searchInputEL = document.getElementById("searchInput");
let spinnerEl = document.getElementById("spinner");
let searchResultsEl = document.getElementById("searchResults");
let resultHeadEl = document.getElementById("resultHead");


function createAndAppendSearchResult(result){
    let resultCont = document.createElement("div");
    let {imageLink,author}=result;
    resultCont.classList.add("d-flex","flex-column","col-12","col-md-5","ml-auto","mr-auto","mt-3");
    searchResultsEl.appendChild(resultCont);

    let imgCont = document.createElement("div");
    let imgEl = document.createElement("img");
    imgEl.classList.add("img");
    imgEl.src=imageLink;
    imgCont.appendChild(imgEl);
    resultCont.appendChild(imgCont);

    let authorName = document.createElement("p");
    authorName.textContent=author;
    authorName.classList.add("mt-3");
    resultCont.appendChild(authorName);
}



function displayResults(search_results){
    spinnerEl.classList.toggle("d-none");
     let headingEl = document.createElement("h1");
     headingEl.classList.add("errorHeading","col-12");
     searchResultsEl.appendChild(headingEl);
    if(search_results.length===0){
        headingEl.textContent = "No Results!";
    }
    else{
        headingEl.textContent = "Popular Books";
        console.log(search_results);
        for(let result of search_results){
            createAndAppendSearchResult(result);
        }
    }
}


function search(event){
    if(event.key==="Enter"){
        searchResultsEl.textContent="";
        spinnerEl.classList.toggle("d-none");
        let searchVal = searchInputEL.value;
        let url = "https://apis.ccbp.in/book-store?title="+searchVal;
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            let {search_results}=jsonData;
            displayResults(search_results);
        });
    }
}



searchInputEL.addEventListener("keydown",search);
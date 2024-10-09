let searchInputEl = document.getElementById("searchInput");
let spinnerEl = document.getElementById("spinner");
let searchResultsEl = document.getElementById("searchResults");

function appendBooks(result) {
  let imgUrl = result.imageLink;
  let authorName = result.author;

  let imageEl = document.createElement("img");
  imageEl.src = imgUrl;
  searchResultsEl.appendChild(imageEl);

  let authorEl = document.createElement("p");
  authorEl.classList.add("authorPara");
  authorEl.textContent = authorName;
  searchResultsEl.appendChild(authorEl);
}

function displayHttpRequestResults(search_results) {
  searchInputEl.value = "";
  let headingEl = document.createElement("h1");
  headingEl.classList.add("errorHeading");
  searchResultsEl.appendChild(headingEl);

  let headingE2 = document.createElement("h1");
  headingE2.classList.add("popularBooks");
  searchResultsEl.appendChild(headingE2);
  if (search_results && search_results.length === 0) {
    spinnerEl.classList.add("d-none");
    headingEl.textContent = "No result found";
  } else if (search_results) {
    spinnerEl.classList.remove("d-none");
    headingE2.textContent = "Popular Books";
    for (let result of search_results) {
      appendBooks(result);
    }
  } else {
    spinnerEl.classList.add("d-none");
    headingEl.textContent = "Error: Invalid response from server";
  }
}

searchInputEl.addEventListener("keydown", function (event) {
  let searchInputValue = event.target.value;
  searchResultsEl.textContent = "";
  if (event.key === "Enter") {
    spinnerEl.classList.remove("d-none");
    let url = `https://apis.ccbp.in/book-store?title=${searchInputValue}`;
    let options = {
      method: "GET",
    };
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        displayHttpRequestResults(jsonData.search_results);
      });
  }
});

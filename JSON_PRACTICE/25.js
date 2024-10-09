let resultCountriesCont = document.getElementById("resultCountries");
let spinnerEl = document.getElementById("spinner");
let searchInputEl = document.getElementById("searchInput");

let searchInpVal="";
let countriesList = [];
function createAndAppendSearchResult(res){
    let {name,flag,population} = res;

    let countryCardEl = document.createElement("div");
    countryCardEl.classList.add("country-card", "d-flex","flex-row","col-12","col-md-6","col-xl-4","ml-auto","mr-auto");
    resultCountriesCont.appendChild(countryCardEl);


    let imgElCont = document.createElement("div");
    let imgEl = document.createElement("img");
    imgEl.src=flag;
    imgEl.classList.add("country-flag");
    imgElCont.appendChild(imgEl);
    countryCardEl.appendChild(imgElCont);


    let countryDetails = document.createElement("div");
    countryDetails.classList.add("ml-3");
    let countryNameEl = document.createElement("p");
    countryNameEl.classList.add("country-name");
    countryNameEl.textContent=name;
    countryDetails.appendChild(countryNameEl);
    let countryPopulationEl = document.createElement("p");
    countryPopulationEl.classList.add("country-population");
    countryPopulationEl.textContent=population;
    countryDetails.appendChild(countryPopulationEl);

    countryCardEl.appendChild(countryDetails);

}



function display() {
  resultCountriesCont.textContent = "";
  searchInpVal = searchInputEl.value;

  for (let country of countriesList) {
    let countryName = country.name;
    // If the searchInputVal includes in the countryName, creating and appending it to the resultCountriesEl
    //At starting searchInputVal is empty it returns true as "" is substring of all strings 
    if (countryName.toLowerCase().includes(searchInpVal.toLowerCase())) {
        createAndAppendSearchResult(country);
    }
  }
}


function search(){
        let url = "https://apis.ccbp.in/countries-data";
        let options = {
            method:"GET",
        };
        spinnerEl.classList.remove("d-none");
        fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            spinnerEl.classList.add("d-none");
            countriesList = jsonData;
            display();
        });
}

function onChangesSearchInput(){
    searchInpVal = searchInputEl.value;
    display();
}


search();
searchInputEl.addEventListener("keydown", onChangesSearchInput);

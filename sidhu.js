let aboutButtonEl = document.getElementById("aboutButton");
let timeToVisitButtonEl = document.getElementById("timeToVisitButton");
let attractionButtonEl = document.getElementById("attractionsButton");

let aboutTabEl = document.getElementById("aboutTab");
let timeToVisitTabEl = document.getElementById("timeToVisitTab");
let attractionTabEl = document.getElementById("attractionsTab");

timeToVisitTabEl.classList.add("d-none");
attractionTabEl.classList.add("d-none");

function onClickAboutTab() {
  aboutTabEl.classList.remove("d-none");
  timeToVisitTabEl.classList.add("d-none");
  attractionTabEl.classList.add("d-none");

  aboutButtonEl.classList.add("selecetd-button");
  timeToVisitButtonEl.classList.remove("selection-button");
  attractionButtonEl.classList.remove("selection-button");
}

function onClickTimeToVisitTab() {
  aboutTabEl.classList.add("d-none");
  timeToVisitTabEl.classList.remove("d-none");
  attractionTabEl.classList.add("d-none");

  aboutButtonEl.classList.remove("selecetd-button");
  timeToVisitButtonEl.classList.add("selection-button");
  attractionButtonEl.classList.add("selection-button");
}

function onClickAttractionsTab() {
  aboutTabEl.classList.add("d-none");
  timeToVisitTabEl.classList.add("d-none");
  attractionTabEl.classList.remove("d-none");

  aboutButtonEl.classList.remove("selecetd-button");
  timeToVisitButtonEl.classList.remove("selection-button");
  attractionButtonEl.classList.add("selection-button");
}


let formData={
    name:"",
    url:""
}

let siteNameInputEl = document.getElementById("siteNameInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
siteNameInputEl.addEventListener("change",function(event){
    if(siteNameInputEl.value===""){
        siteNameErrMsgEl.textContent="Required*";
    }
    else{
        siteNameErrMsgEl.textContent="";
    }
    formData.name=event.target.value;
});

let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
siteUrlInputEl.addEventListener("change", function (event) {
  if (siteUrlInputEl.value === "") {
    siteUrlErrMsgEl.textContent = "Required*";
} else {
    siteUrlErrMsgEl.textContent = "";
}
  formData.url = event.target.value;
});

function validateFormData(formData){
    let {name,url}=formData;
    if(name===""){
        siteNameErrMsgEl.textContent = "Required*";
    }
    if(url===""){
        siteUrlErrMsgEl.textContent = "Required*";
    }

}

let bookmarksListEl = document.getElementById("bookmarksList");
function addNewItem(formData){
    let {name,url}=formData;
    let listItem = document.createElement("li");
    bookmarksListEl.appendChild(listItem);
    let sitename = document.createElement("p");
    sitename.textContent=name;
    let siteurl = document.createElement("a");
    siteurl.textContent = url;
    siteurl.href=url;
    siteurl.setAttribute("target","_blank");
    bookmarksListEl.classList.toggle("d-none");
    listItem.appendChild(sitename);
    listItem.appendChild(siteurl);
}

let bookmarkFormEl = document.getElementById("bookmarkForm");
bookmarkFormEl.addEventListener("submit",function(event){
    event.preventDefault();
    validateFormData(formData);
    addNewItem(formData);
});
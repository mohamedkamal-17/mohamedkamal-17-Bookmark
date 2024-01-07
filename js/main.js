
var siteName = document.getElementById("site-name")
var siteUrl = document.getElementById("site-url")
var supmit = document.getElementById("supmut-btn")
var closeBtn = document.getElementsByClassName("close-btn")
console.log(closeBtn)
let unvalidMasseg = document.getElementsByClassName("unvalid-masseg")
var allMarkerdWepsite = [];




if (localStorage.getItem("bookmark") != null) {
    allMarkerdWepsite = JSON.parse(localStorage.getItem('bookmark'))
    display(allMarkerdWepsite);
}



function unvalidMassgOf() {
    let fullLayer = document.querySelector(".full-layr ");

    let unvalidMasseg = document.getElementsByClassName("unvalid-masseg");
    unvalidMasseg[0].classList.replace("d-block", "d-none");
    fullLayer.classList.replace("d-block", "d-none")


}

closeBtn[0].addEventListener("click", unvalidMassgOf);


function validUrl(url) {
    let pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return pattern.test(url);

}
function validName(name) {
    let pattern = /.{3,}/;
    return pattern.test(name)
}

function validForm(url, name) {
    return (validName(name) && validUrl(url));

}

function clareForm() {
    siteName.value = ""
    siteUrl.value = ""

}

supmit.addEventListener('click', addBookMark);

function showUnvalidMasseg() {
    let unvalidMasseg = document.getElementsByClassName("unvalid-masseg");
    let fullLayer = document.querySelector(".full-layr ");

    unvalidMasseg[0].classList.replace("d-none", "d-block");
    fullLayer.classList.replace("d-none", "d-block")
}
function addBookMark() {

    if (validForm(siteUrl.value, siteName.value)) {

        var bookMark = {
            siteName: siteName.value,
            siteUrl: siteUrl.value,
        }
        allMarkerdWepsite.push(bookMark);
        localStorage.setItem('bookmark', JSON.stringify(allMarkerdWepsite));

        display(allMarkerdWepsite);
        clareForm()
    }
    else showUnvalidMasseg();

}
function deleterecord(index) {
    allMarkerdWepsite.splice(index, 1);

    localStorage.setItem('bookmark', JSON.stringify(allMarkerdWepsite));
    display(allMarkerdWepsite);
}
function visitSite(index) {

    window.open(allMarkerdWepsite[index].siteUrl, '_blank');
}


function display(array) {
    let box = "";
    for (let i = 0; i < array.length; i++) {
        console.log("hhhhhhhhhh");
        box += `
        <tr>
        <td>${i + 1}</td>
        <td>${array[i].siteName}</td>
        <td><button class="btn btn-success" data-index="${i}" onclick="visitSite(${i})"> <i class="fa-solid fa-eye pe-2"></i>Visit</button> </td>
        <td>
        <button  class="btn btn-danger"data-index="${i}"onclick="deleterecord(${i});" > <i class="fa-solid fa-trash-can pe-2"></i>Delete</button>
        </td>
        
       </tr>

        `

    }

    document.getElementById("row-record").innerHTML = box;

}




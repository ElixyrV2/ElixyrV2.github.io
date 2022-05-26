window.onload = function(){
    var modal = document.getElementById('myModal')
    var btn = document.getElementById("show-modal");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}


let btn = document.getElementById("theme-button");
let link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme() {
    let lightTheme = "Sborki.css";
    let darkTheme = "SborkiDark.css";

    let currTheme = link.getAttribute("href");
    let theme = "";

    if (currTheme === lightTheme) {
        currTheme = darkTheme;
        theme = "dark";
    }
    else {
        currTheme = lightTheme;
        theme = "light";
    }

    link.setAttribute("href", currTheme);
}

var x = false
function imgchange (obj,imgX,imgY) {
    if (x) {
        obj.src = imgX
    }
    else {
        obj.src = imgY
    }
    x=!x
}


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
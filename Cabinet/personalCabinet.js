let btn = document.getElementById("theme-button");
let link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme() {
    let lightTheme = "personalCabinet.css";
    let darkTheme = "personalCabinetDark.css";

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
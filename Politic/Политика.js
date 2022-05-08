window.addEventListener('scroll', trackScroll);
	let goTopBtn = document.querySelector('.back');
	goTopBtn.addEventListener('click', function(){
		scrollToY(0)
	});
	function trackScroll() {
    
    let coords = document.documentElement.clientHeight;
    let scrolled = window.scrollY;

    if (scrolled > coords/2) {
        goTopBtn.classList.add('back-show');
    }
    if (scrolled < coords/2) {
        goTopBtn.classList.remove('back-show');
    }
}
function scrollToY(y){
	if('scrollBehavior' in document.documentElement.style){
		window.scrollTo({
			top: y,
			behavior: "smooth"
		});
	}
	else{
		window.scrollTo(0, y);
	}
}

let btn = document.getElementById("theme-button");
let link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme() {
	let lightTheme = "Политика.css";
	let darkTheme = "PolitDark.css";

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

var x=false
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
window.addEventListener('scroll', trackScroll);
	let goTopBtn = document.querySelector('.back');
	goTopBtn.addEventListener('click', function(){
		scrollToY(0)
	});
	function trackScroll() {
    
    let coords = document.documentElement.clientHeight;
    let scrolled = window.scrollY;

    if (scrolled > coords) {
        goTopBtn.classList.add('back-show');
    }
    if (scrolled < coords) {
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
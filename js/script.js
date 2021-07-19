
// NavBar
window.addEventListener('scroll',function(){
	var header = document.querySelector('header')
	if (window.scrollY > 0) {
		header.classList.add('sticky')
	}else{
		header.removeAttribute("class");
	}
})

function toggleMenu(){
	var toggleMenu = document.querySelector('.toggle')
	var menu = document.querySelector('.menu')
	if(toggleMenu.classList[1]){
		toggleMenu.classList.remove("active");
		menu.classList.remove("active");
	}else{
		toggleMenu.classList.add('active')
		menu.classList.add('active')
	}
}
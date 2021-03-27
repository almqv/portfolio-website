const burger = document.getElementById("burger");
const nav = document.querySelector("nav");
const navButtons = document.getElementsByClassName("navlink");

nav.classList.add("anim_fadein");

function toggleMenu(ishidden) {
	if( ishidden ) {
		nav.classList.remove("hidden"); // open menu
		//burger.classList.add("toggle");
	} else {
		nav.classList.add("hidden"); // close menu
		//burger.classList.remove("toggle");
	}
}

burger.addEventListener("click", _ => {
	let ishidden = nav.classList.contains("hidden"); 
	toggleMenu(ishidden);
});

for( navbutton of navButtons ) {
	navbutton.addEventListener("click", _ => {
		nav.classList.add("hidden");
	})
}

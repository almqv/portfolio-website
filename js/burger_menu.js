const burger = document.getElementById("burger");
const nav = document.querySelector("nav");
const navButtons = document.getElementsByClassName("navlink");

nav.classList.add("anim_fadein");

burger.addEventListener("click", _ => {
	if( nav.classList.contains("hidden") ) {
		nav.classList.remove("hidden");
	} else {
		nav.classList.add("hidden");
	}
})

for( navbutton of navButtons ) {
	navbutton.addEventListener("click", _ => {
		nav.classList.add("hidden");
		console.log("AHOfhsdoifhoi");
	})
}

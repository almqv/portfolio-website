const burger = document.getElementById("burger");
const nav = document.querySelector("nav");

burger.addEventListener("click", event => {
	nav.classList.toggle("hidden");
})

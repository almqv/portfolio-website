// Animation for scrolling.
// Elements fade out/in relative to viewport distance.

// Yes. This could be considered as bloat. But if you do not like it then disable JavaScript in your browser.

const checkpoint_y = 200;

window.addEventListener("scroll", () => {
	const scroll_y = window.pageYOffset;
	alpha = 1 - (scroll_y / checkpoint_y);

	document.querySelector("section").style.opacity = alpha;
});

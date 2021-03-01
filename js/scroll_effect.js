// Animation for scrolling.
// Elements fade out/in relative to viewport distance.

// Yes. This could be considered as bloat. But if you do not like it then disable JavaScript in your browser.

const checkpoint_y = 200;
const elemSections = document.getElementsByTagName("section");

console.log(elemSections);

function elementOffsetY(elem) {
	var rect = elem.getBoundingClientRect();
	
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return scrollTop + rect.top;
}

function calculateOpacity(elem, scroll_y) { return 1 - (scroll_y / elementOffsetY(elem)); }

window.addEventListener("scroll", () => {
	const scroll_y = window.pageYOffset; // current Y-coordinate
	// alpha = 1 - (scroll_y / checkpoint_y); // calculate opacity for said element

	//document.querySelector("section").style.opacity = alpha; // apply opacity to said element
	var alphaBuffer;

	elemSections.forEach( function(elem) {
		alphaBuffer = calculateOpacity(elem, scroll_y);
		elem.style.opacity = alphaBuffer;
		console.log(alphaBuffer);
	});
});

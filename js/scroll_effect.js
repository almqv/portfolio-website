// Animation for scrolling.
// Elements fade out/in relative to viewport distance.
// i.e. if the element is within a range of the viewport then fade in, else fade out.

// Yes. This could be considered as bloat. But if you do not like it then disable JavaScript in your browser.

const distanceRange = 150;
const elemSections = document.getElementsByTagName("section"); // list of all the sections

function elementInViewport(elem) {
	var rect = elem.getBoundingClientRect(); // elements "rectangle" coordinates
	
	offset_y = window.pageYOffset || document.documentElement.scrollTop; // get the Y offset
	return rect.top >= 0 && rect.bottom <= offset_y;
}

window.addEventListener("scroll", () => {
	const scroll_y = window.pageYOffset; // current Y-coordinate
	
	var alphaBuffer;
	var elemBuffer;

	for (let i = 0; i < elemSections.length; i++) {
		elemBuffer = elemSections[i];

		alphaBuffer = calculateOpacity(elemBuffer, scroll_y);
		elemBuffer.style.opacity = alphaBuffer;
		//console.log(alphaBuffer);
	}
});

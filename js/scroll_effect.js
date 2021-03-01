// Animation for scrolling.
// Elements fade out/in relative to viewport distance.
// i.e. if the element is within a range of the viewport then fade in, else fade out.

// Yes. This could be considered as bloat. But if you do not like it then disable JavaScript in your browser.

const distanceRange = 150;
const elemSections = document.getElementsByTagName("section"); // list of all the sections

function replaceClass(elem, cl, newcl) {
	elem.className = elem.className.replace(/\bcl\b/g, newcl);
}

function elementInViewport(elem, fraction) {
	let rect = elem.getBoundingClientRect();
	let viewportHeight = window.innerHeight || document.documentElement.clientHeight;

	topOffset = rect.top >= 0 ? 0 : rect.top;
	topFraction = Math.floor(1.0 - (topOffset / rect.height));

	bottomOffset = rect.bottom - viewportHeight;
	bottomFraction = Math.floor( 1.0 - (bottomOffset / rect.height) );

	return !(topFraction < fraction || bottomFraction < fraction);
};


window.addEventListener("scroll", () => {
	//const scroll_y = window.pageYOffset; // current Y-coordinate
	
	var visibleBuffer;
	var elemBuffer;

	for (let i = 0; i < elemSections.length; i++) {
		elemBuffer = elemSections[i];

		visibleBuffer = elementInViewport(elemBuffer, 0.2);
		console.log(elemBuffer.id, visibleBuffer);
	}
});

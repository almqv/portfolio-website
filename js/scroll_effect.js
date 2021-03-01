// Animation for scrolling.
// Elements fade out/in relative to viewport distance.

// Yes. This could be considered as bloat. But if you do not like it then disable JavaScript in your browser.

const distanceRange = 150;
// const elemSections = document.getElementsByTagName("section"); // list of all the sections
const elemSections =  [ document.getElementById("projects") ];

function elementOffsetY(elem) {
	var rect = elem.getBoundingClientRect(); // elements "rectangle" coordinates
	
	scrollTop = window.pageYOffset || document.documentElement.scrollTop; // get the Y offset
	return scrollTop + rect.top; 
}

function calculateOpacity(elem, scroll_y) { 
	let distance = Math.abs(scroll_y - elementOffsetY(elem));	
	let alpha = distanceRange / distance;
	console.log(alpha, distance);
	return alpha; 
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

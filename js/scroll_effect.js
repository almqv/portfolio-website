// Animation for scrolling.
// Elements fade out/in relative to viewport distance.
// i.e. if the element is within a range of the viewport then fade in, else fade out.

// Yes. This could be considered as bloat. But if you do not like it then disable JavaScript in your browser.

const elemSections = document.getElementsByTagName("section"); // list of all the sections

let options = {
	root: null,
	rootMargin: "0px",
	threshold: [0, 0.5]
}

function test(a, b) {
	console.log(a, b, "AHIOdfvchoisdhfiosdhfio", count);
}

let sectionsCount = elemSections.length;
let observer = new IntersectionObserver(test, options);

for( let i = 0; i < sectionsCount; i++ ) { observer.observe(elemSections[i]); } // observe all of the sections

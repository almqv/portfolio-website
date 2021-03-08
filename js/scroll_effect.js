// Animation for scrolling.
// Elements fade out/in relative to viewport distance.
// i.e. if the element is within a range of the viewport then fade in, else fade out.

// Yes. This could be considered as bloat. But if you do not like it then disable JavaScript in your browser.

const elemSections = document.getElementsByTagName("section"); // list of all the sections
const intRatioLimit = 0.25;

let options = {
	root: null,
	rootMargin: "-40% 0px 0px 0px", // TODO: needs to be relative to content not wrapper
	threshold: [0, intRatioLimit]
}

function toggleAnimation(elem, intRatio) {
	console.log("Does this work?", elem, intRatio);
	if( intRatio >= intRatioLimit ) {
		// fade in
		elem.classList.remove("anim_fadeout");
		elem.classList.add("anim_fadein");
	} else {
		// fade out
		elem.classList.remove("anim_fadein");
		elem.classList.add("anim_fadeout");
	}	
}

function handleIntersection(intEntry, _) {
	for( let section of intEntry ) {
		toggleAnimation(section.target, section.intersectionRatio);
	}
}

let sectionsCount = elemSections.length;
let observer = new IntersectionObserver(handleIntersection, options);

for (let section of elemSections) { 
	observer.observe(section); 
	section.classList.add("anim_fadeout");
} // observe all of the sections

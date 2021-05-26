// Script for picture modals

const modal = document.getElementById("picture-modal");
const modal_img = modal.children[0].children[0];
const modal_txt = modal.children[0].children[1];

const imgs = document.getElementsByClassName("rice-picture");

for( img of imgs ) {
	img.addEventListener("click", _ => {
		modal.style.display = "block";

		modal_img.src = img.src;
		modal_txt.textContent = img.alt;
	})
}

// hide modal on click
modal.addEventListener("click", _ => { modal.style.display = "none"; });

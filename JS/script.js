// initializing Variables
const sections = document.querySelectorAll(".sect");
const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

// Toggle Navbar
const toggleNavbarVisibility = () => {
	isNavbarExpanded = !isNavbarExpanded;
	navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};
navbarToggle.addEventListener("click", toggleNavbarVisibility);
navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);

// Adding Smooth Scroll
const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 25 && rect.bottom <= 575;
};
window.addEventListener("scroll", () => {
	sections.forEach((section) => {
        if (isInViewport(section)) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});
const commentForm = document.getElementById("commentForm");
const commentList = document.getElementById("commentList");

// Handling Form
commentForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const comment = document.getElementById("comment").value;

	if (name && email && comment) {
		const commentItem = document.createElement("div");
		commentItem.innerHTML = `<p><strong>${name}</strong> (${email}): ${comment}</p>`;
		commentList.appendChild(commentItem);

		commentForm.reset();
	} else {
		alert("Please fill in all fields.");
	}
});
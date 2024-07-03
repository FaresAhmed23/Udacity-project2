// initializing Variables
const sections = document.querySelectorAll("section");
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
navbar.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        event.preventDefault();
        document.querySelector(event.target.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    }
});

window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 300) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
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

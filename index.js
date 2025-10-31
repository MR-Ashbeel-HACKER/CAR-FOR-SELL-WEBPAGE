// Navbar toggle
let MenuBtn = document.querySelector("#MenuBtn");
let Navbar = document.querySelector(".navbar");

MenuBtn.onclick = () => {
    MenuBtn.classList.toggle("fa-times");
    Navbar.classList.toggle("active");
};

// Login form toggle
let loginBtn = document.querySelector("#LoginBtn");
let loginForm = document.querySelector(".LoginFormContainer");
let closeBtn = document.querySelector("#CloseLoginForm");

loginBtn.onclick = () => {
    loginForm.classList.add("active");
};
closeBtn.onclick = () => {
    loginForm.classList.remove("active");
};

// Home Parallax Effect
document.querySelector(".home").onmousemove = (e) => {
    document.querySelectorAll(".HomeParallexEffect").forEach((el) => {
        let speed = el.getAttribute("data-speed");
        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        el.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
};

document.querySelector(".home").onmouseleave = () => {
    document.querySelectorAll(".HomeParallexEffect").forEach((el) => {
        el.style.transform = `translateX(0px) translateY(0px)`;
    });
};

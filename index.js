// Navbar toggle
const MenuBtn = document.querySelector("#MenuBtn");
const Navbar = document.querySelector(".navbar");

MenuBtn.onclick = () => {
  MenuBtn.classList.toggle("fa-times");
  Navbar.classList.toggle("active");
};

// Login form toggle
const loginBtn = document.querySelector("#LoginBtn");
const loginForm = document.querySelector(".LoginFormContainer");
const closeBtn = document.querySelector("#CloseLoginForm");

loginBtn.onclick = () => {
  loginForm.classList.add("active");
};

closeBtn.onclick = () => {
  loginForm.classList.remove("active");
};

// Home Parallax Effect (optimized for performance)
const home = document.querySelector(".home");
const parallexElements = document.querySelectorAll(".HomeParallexEffect");

home.addEventListener("mousemove", (e) => {
  window.requestAnimationFrame(() => {
    parallexElements.forEach((el) => {
      const speed = el.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 120;
      const y = (window.innerHeight - e.pageY * speed) / 120;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
});

home.addEventListener("mouseleave", () => {
  parallexElements.forEach((el) => {
    el.style.transform = "translate(0px, 0px)";
  });
});

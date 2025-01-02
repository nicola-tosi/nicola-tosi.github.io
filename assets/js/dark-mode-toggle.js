const toggle = document.querySelector("#dark-mode-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
});

// Persist the user's preference
if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
}

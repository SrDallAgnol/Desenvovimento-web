const btn = document.getElementById("temaBtn");
const body = document.body;

btn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        btn.textContent = "Modo Light";
    } else {
        btn.textContent = "Modo Dark";
    }
});

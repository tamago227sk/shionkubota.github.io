const openButton = document.querySelector(".recognition-open");
const closeButton = document.querySelector(".recognition-close");
const hidden = document.querySelector(".recognition-hidden");

openButton.addEventListener("click", () => {

    hidden.classList.add("open");
    openButton.style.display = "none";

});

closeButton.addEventListener("click", () => {

    hidden.classList.remove("open");
    openButton.style.display = "inline-block";

});

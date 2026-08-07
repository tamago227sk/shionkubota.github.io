const details = document.querySelector(".recognition-more");

const summary = details.querySelector(".recognition-toggle");

details.addEventListener("toggle", () => {

    if (details.open) {

        summary.textContent = "Hide Additional Honors ↑";

    } else {

        summary.textContent = "View Additional Honors →";

    }

});

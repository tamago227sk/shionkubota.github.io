document.querySelectorAll(".recognition-hide button").forEach(button => {

    button.addEventListener("click", () => {

        const details = button.closest("details");

        details.removeAttribute("open");

    });

});

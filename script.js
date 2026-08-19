/* ==========================================
   Recognition Expand / Collapse
========================================== */

const recognitionOpen = document.querySelector(".recognition-open");
const recognitionClose = document.querySelector(".recognition-close");
const recognitionHidden = document.querySelector(".recognition-hidden");

if (recognitionOpen && recognitionClose && recognitionHidden) {

    recognitionOpen.addEventListener("click", () => {

        recognitionHidden.classList.add("open");
        recognitionOpen.style.display = "none";

    });

    recognitionClose.addEventListener("click", () => {

        recognitionHidden.classList.remove("open");
        recognitionOpen.style.display = "inline-block";

    });

}



/* ==========================================
   Media Archive Expand / Collapse
========================================== */

document.querySelectorAll(".archive-category").forEach(category => {

    const archiveOpen = category.querySelector(".archive-open");
    const archiveClose = category.querySelector(".archive-close");
    const archiveHidden = category.querySelector(".archive-hidden");

    /*
       Some archive categories don't have
       expandable content, so skip those.
    */

    if (!archiveOpen || !archiveClose || !archiveHidden) {
        return;
    }

    archiveOpen.addEventListener("click", () => {

        archiveHidden.classList.add("open");
        archiveOpen.style.display = "none";

    });

    archiveClose.addEventListener("click", () => {

        archiveHidden.classList.remove("open");
        archiveOpen.style.display = "inline-block";

    });

});

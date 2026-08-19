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


// ================= HERO SLIDER =================

const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".hero-dot");

const heroNext = document.querySelector(".hero-next");
const heroPrev = document.querySelector(".hero-prev");

let currentHeroSlide = 0;
let heroTimer;


function showHeroSlide(index) {

    heroSlides.forEach(slide => {
        slide.classList.remove("active");
    });

    heroDots.forEach(dot => {
        dot.classList.remove("active");
    });


    currentHeroSlide = index;

    if (currentHeroSlide >= heroSlides.length) {
        currentHeroSlide = 0;
    }

    if (currentHeroSlide < 0) {
        currentHeroSlide = heroSlides.length - 1;
    }


    heroSlides[currentHeroSlide].classList.add("active");
    heroDots[currentHeroSlide].classList.add("active");

}


function nextHeroSlide() {

    showHeroSlide(currentHeroSlide + 1);

}


function previousHeroSlide() {

    showHeroSlide(currentHeroSlide - 1);

}


function startHeroTimer() {

    clearInterval(heroTimer);

    heroTimer = setInterval(() => {

        nextHeroSlide();

    }, 10000);

}


if (heroNext && heroPrev && heroSlides.length > 0) {

    heroNext.addEventListener("click", () => {

        nextHeroSlide();
        startHeroTimer();

    });


    heroPrev.addEventListener("click", () => {

        previousHeroSlide();
        startHeroTimer();

    });


    heroDots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            showHeroSlide(index);
            startHeroTimer();

        });

    });


    startHeroTimer();

}

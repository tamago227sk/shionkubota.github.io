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


const heroSlidesContainer = document.querySelector(".hero-slides");
const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".hero-dot");

const heroNext = document.querySelector(".hero-next");
const heroPrev = document.querySelector(".hero-prev");

let currentHeroSlide = 0;
let heroTimer;
let isHeroTransitioning = false;


/* Number of REAL slides — clone not included */
const realHeroSlides = 2;


function updateHeroDots(index) {

    heroDots.forEach(dot => {
        dot.classList.remove("active");
    });

    const dotIndex = index % realHeroSlides;

    if (heroDots[dotIndex]) {
        heroDots[dotIndex].classList.add("active");
    }

}


function moveHeroSlider(index, animate = true) {

    if (!heroSlidesContainer) return;

    heroSlidesContainer.style.transition = animate
        ? "transform 1.35s cubic-bezier(0.65, 0, 0.35, 1)"
        : "none";

    heroSlidesContainer.style.transform =
        `translateX(-${index * 100}%)`;

}


function nextHeroSlide() {

    if (isHeroTransitioning) return;

    isHeroTransitioning = true;

    currentHeroSlide++;

    moveHeroSlider(currentHeroSlide, true);
    updateHeroDots(currentHeroSlide);


    /*
       We are now moving from slide 2
       to the cloned slide 1.
    */

    if (currentHeroSlide === realHeroSlides) {

        setTimeout(() => {

            /*
               Instantly jump from cloned Slide 1
               back to real Slide 1.
               Because they're identical,
               the visitor won't see the jump.
            */

            currentHeroSlide = 0;

            moveHeroSlider(0, false);

            isHeroTransitioning = false;

        }, 1350);

    } else {

        setTimeout(() => {
            isHeroTransitioning = false;
        }, 1350);

    }

}


function previousHeroSlide() {

    if (isHeroTransitioning) return;

    isHeroTransitioning = true;


    /*
       If we're on Slide 1, jump invisibly
       to cloned Slide 1 first.
    */

    if (currentHeroSlide === 0) {

        currentHeroSlide = realHeroSlides;

        moveHeroSlider(currentHeroSlide, false);

        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                currentHeroSlide = realHeroSlides - 1;

                moveHeroSlider(currentHeroSlide, true);
                updateHeroDots(currentHeroSlide);

            });

        });

    } else {

        currentHeroSlide--;

        moveHeroSlider(currentHeroSlide, true);
        updateHeroDots(currentHeroSlide);

    }


    setTimeout(() => {
        isHeroTransitioning = false;
    }, 1350);

}


function startHeroTimer() {

    clearInterval(heroTimer);

    heroTimer = setInterval(() => {
        nextHeroSlide();
    }, 10000);

}


if (heroSlidesContainer && heroSlides.length > 0) {

    if (heroNext) {

        heroNext.addEventListener("click", () => {
            nextHeroSlide();
            startHeroTimer();
        });

    }


    if (heroPrev) {

        heroPrev.addEventListener("click", () => {
            previousHeroSlide();
            startHeroTimer();
        });

    }


    heroDots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            if (isHeroTransitioning) return;

            currentHeroSlide = index;

            moveHeroSlider(currentHeroSlide, true);
            updateHeroDots(currentHeroSlide);

            startHeroTimer();

        });

    });


    startHeroTimer();

}

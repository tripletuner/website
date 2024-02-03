document.addEventListener("DOMContentLoaded", function () {
    const parallaxBg = document.querySelector(".parallax-bg");

    window.addEventListener("scroll", function () {
        const offsetY = window.scrollY;
        parallaxBg.style.transform = `translateY(${offsetY * 0.3}px)`;
    });
});

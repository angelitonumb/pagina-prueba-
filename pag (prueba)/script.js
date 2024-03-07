document.addEventListener("DOMContentLoaded", function () {
    const sliderContainer = document.querySelector(".carruseles");
    const sliders = document.querySelectorAll(".slider-section");
    const totalSliders = sliders.length;
    let currentSlide = 0;

    function showSlide(index) {
        sliders.forEach((slider) => {
            slider.style.opacity = 0;
        });
        sliders[index].style.opacity = 1;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSliders;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSliders) % totalSliders;
        showSlide(currentSlide);
    }

    const btnLeft = document.querySelector(".btn-left");
    const btnRight = document.querySelector(".btn-right");

    if (btnLeft && btnRight) {
        btnLeft.addEventListener("click", prevSlide);
        btnRight.addEventListener("click", nextSlide);
    }

    showSlide(currentSlide);

    setInterval(nextSlide, 5000);

    // Evento de clic para el ícono de Facebook
    document.getElementById('facebook').addEventListener('click', function () {
        window.open('https://www.facebook.com/tusocialpage', '_blank');
    });

    // Evento de clic para el ícono de Twitter
    document.getElementById('twitter').addEventListener('click', function () {
        window.open('https://www.twitter.com/tusocialpage', '_blank');
    });

    // Evento de clic para el ícono de Instagram
    document.getElementById('instagram').addEventListener('click', function () {
        window.open('https://www.instagram.com/tusocialpage', '_blank');
    });
});

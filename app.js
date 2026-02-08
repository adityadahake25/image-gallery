const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");

document.querySelectorAll('.col img').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

function closeModal() {
    modal.style.display = "none";
};

window.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});


let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000);
};
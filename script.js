/* --- Hamburger Menu Logic --- */
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show-menu');
}

/* --- Single Page Navigation Logic (REMOVED) --- */

/* --- Image Gallery Slider Logic --- */
let currentSlide = 0;

function moveSlide(direction) {
    const track = document.getElementById('slider-track');
    const images = track.querySelectorAll('img');
    const totalSlides = images.length;
    
    currentSlide += direction;
    
    // Loop back to start or end
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    
    // Calculate translation percentage (-100% per slide)
    const translation = currentSlide * -100;
    track.style.transform = `translateX(${translation}%)`;
}
 
    // JavaScript code to implement slideshow functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    // Function to show the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Function to show the previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Event listeners for next and previous buttons
    document.getElementById('nextnb').addEventListener('click', nextSlide);
    document.getElementById('prevnb').addEventListener('click', prevSlide);

    // Show the initial slide
    showSlide(currentSlide);
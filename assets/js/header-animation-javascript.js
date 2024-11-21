document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.hm_menu_wrapper'); // Select the header

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) { // Adjust the scroll position threshold
            header.classList.add('hm_fixed'); // Add the class when scrolled down
        } else {
            header.classList.remove('hm_fixed'); // Remove the class when at the top
        }
    });
});
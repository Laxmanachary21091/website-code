const navLinks = document.querySelector('nav');
const toggleButton = document.createElement('button');

toggleButton.innerText = 'Menu';
toggleButton.style.display = 'none'; // Initially hide the button

// Check screen width and show/hide button accordingly
function checkScreenSize() {
    if (window.innerWidth < 768) {
        toggleButton.style.display = 'block'; // Show button on small screens
        navLinks.style.display = 'none'; // Hide nav links
    } else {
        toggleButton.style.display = 'none'; // Hide button on larger screens
        navLinks.style.display = 'flex'; // Show nav links
    }
}

// Toggle navigation links visibility
toggleButton.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});

// Append toggle button to header
document.querySelector('header').appendChild(toggleButton);

// Check screen size on load and resize
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3 + 1; // Slightly larger range for variety
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Galactic arm configuration using a logarithmic spiral
    const armCount = 2; // Number of arms
    const arms = Array.from({ length: armCount }, (_, i) => i);
    const arm = arms[Math.floor(Math.random() * arms.length)];
    const angle = Math.random() * 2 * Math.PI; // Random angle for spiral
    const radius = Math.log(1 + Math.random() * 5) * 20; // Logarithmic spiral radius
    const x = (radius * Math.cos(angle + arm * 2 * Math.PI / armCount)) + (50 * Math.random()); // Center offset + randomness
    const y = (radius * Math.sin(angle + arm * 2 * Math.PI / armCount)) + (50 * Math.random());

    star.style.left = `${x}vw`; // Limit to viewport width
    star.style.top = `${y}vh`;  // Limit to viewport height
    star.style.background = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`;
    document.querySelector('.background').appendChild(star);
    return star;
}

function createStreak() {
    const streak = document.createElement('div');
    streak.className = 'streak';
    streak.style.left = `${Math.random() * 75}vw`; // Start within 75% to avoid aside
    streak.style.top = `${Math.random() * 50}vh`; // Start from top half
    streak.style.width = `${Math.random() * 150 + 50}px`; // Variable length
    document.querySelector('.background').appendChild(streak);

    streak.addEventListener('animationend', () => streak.remove());
}

function animateStarsAndStreaks() {
    setInterval(() => {
        if (Math.random() > 0.6) createStar(); // More frequent star creation
        if (Math.random() > 0.9) createStreak(); // Random intervals for streaks
    }, 400); // Faster interval for more stars
}

function initStarsAndStreaks() {
    for (let i = 0; i < 200; i++) { // Increased to 200 stars for density
        createStar();
    }
    animateStarsAndStreaks();
}

window.onload = () => {
    initStarsAndStreaks();
};

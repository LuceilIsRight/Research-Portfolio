function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    const armCount = 2;
    const arms = Array.from({ length: armCount }, (_, i) => i);
    const arm = arms[Math.floor(Math.random() * arms.length)];
    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.log(1 + Math.random() * 5) * 20;
    const x = (radius * Math.cos(angle + arm * 2 * Math.PI / armCount)) + (50 * Math.random());
    const y = (radius * Math.sin(angle + arm * 2 * Math.PI / armCount)) + (50 * Math.random());

    // Bias towards lower coordinates (y > 50vh)
    if (Math.random() > 0.3) {
        y = Math.max(y, 50 + Math.random() * 50); // Ensure y is at least 50vh with extra randomness
    }

    star.style.left = `${x}vw`;
    star.style.top = `${y}vh`;
    star.style.background = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`;
    document.querySelector('.background').appendChild(star);
    return star;
}

function createNebula() {
    const nebula = document.createElement('div');
    nebula.className = 'nebula';
    const types = ['red', 'blue', 'purple'];
    nebula.classList.add(types[Math.floor(Math.random() * types.length)]);
    nebula.style.left = `${Math.random() * 75}vw`;
    nebula.style.top = `${Math.random() * 100}vh`;
    nebula.style.width = `${Math.random() * 200 + 100}px`;
    nebula.style.height = `${Math.random() * 200 + 100}px`;
    document.querySelector('.background').appendChild(nebula);
}

function createMovingImage() {
    const image = document.createElement('img');
    image.className = 'moving-image';
    image.src = 'Rec/videoframe_14826.png'; // Ensure this path is correct
    image.style.left = `${Math.random() * 75}vw`; // Start within 75% to avoid aside
    document.querySelector('.background').appendChild(image);

    image.addEventListener('animationend', () => image.remove());
}

function createStreak() {
    const streak = document.createElement('div');
    streak.className = 'streak';
    streak.style.left = `${Math.random() * 75}vw`;
    streak.style.top = `${Math.random() * 50}vh`;
    streak.style.width = `${Math.random() * 150 + 50}px`;
    document.querySelector('.background').appendChild(streak);

    streak.addEventListener('animationend', () => streak.remove());
}

function animateStarsAndStreaks() {
    setInterval(() => {
        if (Math.random() > 0.6) createStar();
        if (Math.random() > 0.9) createStreak();
        if (Math.random() > 0.85) createMovingImage(); // Random intervals for moving image
    }, 400);
}

function initStarsAndStreaks() {
    for (let i = 0; i < 250; i++) { // Increased to 250 stars for more density
        createStar();
    }
    for (let i = 0; i < 5; i++) {
        createNebula();
    }
    animateStarsAndStreaks();
}

window.onload = () => {
    initStarsAndStreaks();
};

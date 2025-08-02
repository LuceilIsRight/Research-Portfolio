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
    nebula.style.left = `${Math.random() * 75}vw`; // Limit to 75% to avoid aside
    nebula.style.top = `${Math.random() * 100}vh`;
    nebula.style.width = `${Math.random() * 200 + 100}px`;
    nebula.style.height = `${Math.random() * 200 + 100}px`;
    document.querySelector('.background').appendChild(nebula);
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
    }, 400);
}

function initStarsAndStreaks() {
    for (let i = 0; i < 200; i++) {
        createStar();
    }
    for (let i = 0; i < 5; i++) { // Add a few nebulae
        createNebula();
    }
    animateStarsAndStreaks();
}

window.onload = () => {
    initStarsAndStreaks();
};

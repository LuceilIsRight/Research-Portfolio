function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 75}vw`; // Limit to 75% to avoid aside overlap
    star.style.top = `${Math.random() * 100}vh`;
    star.style.background = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`;
    document.querySelector('.background').appendChild(star);
    return star;
}

function createStreak() {
    const streak = document.createElement('div');
    streak.className = 'streak';
    streak.style.top = `${Math.random() * 100}vh`;
    streak.style.height = `${Math.random() * 3 + 1}px`;
    document.querySelector('.background').appendChild(streak);

    streak.addEventListener('animationend', () => streak.remove());
}

function animateStarsAndStreaks() {
    setInterval(() => {
        if (Math.random() > 0.7) createStar();
        if (Math.random() > 0.9) createStreak(); // Random intervals for streaks
    }, 500);
}

function initStarsAndStreaks() {
    for (let i = 0; i < 50; i++) {
        createStar();
    }
    animateStarsAndStreaks();
}

window.onload = () => {
    initStarsAndStreaks();
};

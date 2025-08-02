function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    document.querySelector('.background').appendChild(star);

    const duration = Math.random() * 2 + 1;
    const endX = -50;
    const endY = Math.random() * 100 - 50;
    star.style.animation = `shoot ${duration}s linear forwards`;

    star.addEventListener('animationend', () => star.remove());

    return star;
}

function animateStars() {
    setInterval(() => {
        if (Math.random() > 0.7) createShootingStar();
    }, 500);
}

function initStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = `${star.style.width}`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.background = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`;
        document.querySelector('.background').appendChild(star);
    }
    animateStars();
}

@keyframes shoot {
    0% {
        transform: translate(0, 0) scale(1);
        opacity: 1;
    }
    100% {
        transform: translate(-50vw, 50vh) scale(0);
        opacity: 0;
    }
}

@keyframes twinkle {
    0% { opacity: 0.5; }
    100% { opacity: 1; }
}

window.onload = () => {
    initStars();
};

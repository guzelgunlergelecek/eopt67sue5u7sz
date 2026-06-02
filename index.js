/* =============================================
   CCPLUS ENTERTAINMENT - INTERACTION ENGINE
   ============================================= */

// 1. Sliding Linear Scroll Engine (Kaydırak Etkisi)
const smoothLinks = document.querySelectorAll('.smooth-link');

smoothLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Tamamen ayarlanabilir, pürüzsüz kaydırma parametreleri
            window.scrollTo({
                top: targetSection.offsetTop - 40, // Navbar boşluğu için offset
                behavior: 'smooth'
            });
        }
    });
});

// 2. Kinetic Background Interactive Ambient Shadows
const shape1 = document.getElementById('ambientShape1');
const shape2 = document.getElementById('ambientShape2');

window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.03;
    const moveY = (clientY - window.innerHeight / 2) * 0.03;

    if(shape1 && shape2) {
        shape1.style.transform = `translate(${moveX}px, ${moveY}px)`;
        shape2.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
    }
});

// 3. Linear Intersection Engine for Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const triggerBottom = (window.innerHeight / 5) * 4.5;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            element.classList.add('active');
        }
    });

    // Top Fluid Progress Bar Sync
    const scrollProgress = document.getElementById('scrollProgress');
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if(totalHeight > 0 && scrollProgress) {
        const progress = (window.pageYOffset / totalHeight);
        scrollProgress.style.transform = `scaleX(${progress})`;
    }
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
    revealOnScroll();
    setTimeout(initCounters, 200);
});

// 4. Multi-Axis 3D Spatial Tilt Mechanics
const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const cardRect = card.getBoundingClientRect();
        const cardWidth = cardRect.width;
        const cardHeight = cardRect.height;
        
        const x = e.clientX - cardRect.left - cardWidth / 2;
        const y = e.clientY - cardRect.top - cardHeight / 2;
        
        const rotateX = -(y / cardHeight) * 10; 
        const rotateY = (x / cardWidth) * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
});

// 5. Numerical Increment Animation Engine
function initCounters() {
    const counters = document.querySelectorAll('.count-num');
    const speed = 40; 

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + inc;
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

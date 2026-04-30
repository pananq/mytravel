// 赣州3日行程 - 交互脚本

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initDayNavigation();
});

// 滚动动画
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // 观察所有卡片
    const cards = document.querySelectorAll('.bg-white.rounded-2xl');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // 观察section标题
    const sectionHeaders = document.querySelectorAll('section > .flex.items-center');
    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateX(-20px)';
        header.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(header);
    });
}

// 日期导航 - 点击概览卡片跳转到对应日期
function initDayNavigation() {
    const overviewCards = document.querySelectorAll('section:first-of-type .grid > div');
    const dayIds = ['day1', 'day2', 'day3'];

    overviewCards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            const target = document.getElementById(dayIds[index]);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

        // 悬停效果
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

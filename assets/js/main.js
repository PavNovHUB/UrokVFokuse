document.addEventListener("DOMContentLoaded", () => {
    // Звезды рейтинга
    let currentRating = 0;
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const rating = parseInt(star.dataset.rating);
            highlightStars(rating);
        });

        star.addEventListener('click', () => {
            currentRating = parseInt(star.dataset.rating);
            highlightStars(currentRating);
        });

        // Убираем подсветку при уходе мыши, если не выбрана
        star.addEventListener('mouseleave', () => {
            if (currentRating === 0) {
                highlightStars(0);
            } else {
                highlightStars(currentRating);
            }
        });
    });

    function highlightStars(rating) {
        stars.forEach(s => {
            s.classList.toggle('active', parseInt(s.dataset.rating) <= rating);
        });
    }

    window.submitRating = function() {
        if (currentRating === 0) {
            alert("Поставьте оценку от 1 до 5 звезд!");
            return;
        }
        alert(`Спасибо! Ваша оценка — ${currentRating} ⭐`);
        // Здесь можно добавить отправку на сервер
    };

    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    console.log('%cУрок в Фокусе — улучшенная версия загружена!', 'color: #1a4d2e; font-size: 16px; font-weight: bold;');
});
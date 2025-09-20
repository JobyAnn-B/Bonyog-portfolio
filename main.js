
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add interactive hover effects to about items
        document.querySelectorAll('.about-item').forEach(item => {
            item.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-5px) scale(1.05)';
                this.style.boxShadow = '0 15px 30px rgba(236, 72, 153, 0.3)';
            });

            item.addEventListener('mouseleave', function () {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'none';
            });
        });

        // Mobile menu toggle (for future enhancement)
        const navMenu = document.querySelector('.nav-menu');

        // Add some cute interactive elements
        document.addEventListener('DOMContentLoaded', function () {
            // Add sparkle effect on page load
            setTimeout(() => {
                document.body.style.animation = 'none';
            }, 3000);
        });
    
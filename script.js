const menuToggle = document.querySelector('.menu-toggle');
        const navi = document.querySelector('.navi');

        menuToggle.addEventListener('click', () => {
            navi.classList.toggle('active');
        });
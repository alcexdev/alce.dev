// Load particles based on the current theme
function loadParticles(theme) {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": theme === 'dark' ? "#00FFFF" : "#000000"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 3
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 1.5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 20,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 75,
                "color": theme === 'dark' ? "#00FFFF" : "#000000",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "enable": false,
                "onhover": {
                    "enable": false,
                },
                "onclick": {
                    "enable": false,
                },
                "resize": true
            },
            "modes": {
                "enable": false,
                "grab": {
                    "enable": false,
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "enable": false,
                    "distance": 400,
                    "size": 42,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 2
                },
                "repulse": {
                    "enable": false,
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "enable": false,
                    "particles_nb": 4
                },
                "remove": {
                    "enable": false,
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}

document.getElementById('theme-toggle').addEventListener('click', () => {
    const body = document.body;
    const mooseImage = document.getElementById('moose-image');
    const isDarkTheme = body.getAttribute('data-theme') === 'dark';

    if (isDarkTheme) {
        body.setAttribute('data-theme', 'light');
        mooseImage.src = './img/moose.png';
        loadParticles('light');
    } else {
        body.setAttribute('data-theme', 'dark');
        mooseImage.src = './img/moose-dark.png';
        loadParticles('dark');
    }
});

// Load particles based on initial theme
document.addEventListener('DOMContentLoaded', () => {
    const initialTheme = document.body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    loadParticles(initialTheme);
});

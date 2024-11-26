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
                "value": theme === 'dark' ? "#00ffcc" : "#000000"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 0.4,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 2,
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
                "distance": 50,
                "color": theme === 'dark' ? "#00ffcc" : "#000000",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
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

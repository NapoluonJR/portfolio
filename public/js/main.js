// Effet sur le titre au chargement
document.addEventListener("DOMContentLoaded", () => {
    const mainTitle = document.querySelector("h1");
    if (mainTitle) {
        mainTitle.style.opacity = 0;
        mainTitle.style.transition = "opacity 1s";
        setTimeout(() => {
            mainTitle.style.opacity = 1;
        }, 100);
    }

    // Initialiser particles.js uniquement si la div existe
    const particlesContainer = document.getElementById("particles-js");
    if (particlesContainer) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#ffffff", "#d0f0ff", "#e6d6ff", "#fff6b1"]
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 1,
                    "random": true
                },
                "size": {
                    "value": 2.5,
                    "random": true
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": true
                },
                "modes": {
                    "repulse": {
                        "distance": 100,
                        "duration": 0.4
                    }
                }
            },
            "retina_detect": true
        });
    }
});

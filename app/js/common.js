$(function () {


    $('#t').t({
        speed: 70,
        blink: 400,
        mistype: 20
    });


    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 20,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#f5f5f5"
            },
            "shape": {
                "type": ["image", "image"],
                "stroke": {
                    "width": 0,
                    "color": "#f5f5f5"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/bulb.svg",
                    "width": 500,
                    "height": 750
                }
            },
            "opacity": {
                "value": 1,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 30,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 20,
                    "size_min": 20,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#A6A6A6",
                "opacity": 0.4,
                "width": 5
            },
            "move": {
                "enable": true,
                "speed": 4,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
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
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        // "config_demo": {
        //     "hide_card": false,
        //     "background_color": "#b61924",
        //     "background_image": "",
        //     "background_position": "50% 50%",
        //     "background_repeat": "no-repeat",
        //     "background_size": "cover"
        // }
    });

    SmoothScroll({
        pulseAlgorithm   : true,
        pulseScale       : 4,
        pulseNormalize   : 1,
    });

    zenscroll.setup(700, 10)


    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "GET",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});

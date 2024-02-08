imgChange = 1

startInterval();

particlesJS("background", {

    particles: {
        number: {
            value: 35, // Number of Particles (count)
            density: {
                enable: true,
                value_area: 300, // Area where particles will be distributed
            },
        },

        color: {
            value: "#ffffff", // Particles color
        },
        shape: {
            type: "triangle", // Shape type
        },
        opacity: {
            value: 0.8, // Base opacity of particles
            random: true,
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 7, // Base size of particles
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },

        // Connecting lines
        line_linked: {
            enable: true,
            distance: 150, // Maximum distance between linked particles
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },

        // Particle movement
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce", // Behavior when particles move out of the canvas
            bounce: false,
        },
    },
    // Interactivity settings
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true, // Enable hover interactivity
                mode: "repulse",
            },
            onclick: {
                enable: true, // Enable for click
                mode: "push", // Push particles on click
            },
            resize: true, // Resize particles animation on window resize
        },
    },

    // Detect retina displays
    retina_detect: true,

});


imgChange = 1
function startInterval() {
    interval = setInterval(function () {

        if (imgChange >= 5) {
            imgChange = 0
        }

        imgChange++
        img = document.getElementById('displayedImage');

        switch (imgChange) {
            case 1:
                console.log('alterar 1');
                img.src = './images/Locus.png';
                break;
            case 2:
                console.log('alterar 2');
                img.src = './images/loginPage.png';
                break;
            case 3:
                console.log('alterar 3');
                img.src = './images/weatherApp.png';
                break;
            case 4:
                console.log('alterar 4');
                img.src = './images/MiMFilms.png';
                break;
            case 5:
                console.log('alterar 5');
                img.src = './images/passGenerator.png';
                break;
        }
    }, 3000);
}


function changeSrc(imageId) {
    clearInterval(interval);
     image = document.getElementById('displayedImage');
    switch (imageId) {
        case 'image1':
            image.src = './images/Locus.png';
            break;
        case 'image2':
            image.src = './images/loginPage.png';
            break;
        case 'image3':
            image.src = './images/weatherApp.png';
            break;
        case 'image4':
            image.src = './images/MiMFilms.png';
            break;
        case 'image5':
            image.src = './images/passGenerator.png';
            break;
    }
}

introText = document.getElementById('introText');
typewriter = new Typewriter(introText, {
    loop: true,
    cursor: '_',
    autoStart: true
});
typewriter
    .typeString('<span class="lets">Let\'s</span> build a web of innovation and user delight together!')
    .pauseFor(2500)
    .deleteChars(52)
    .typeString('code a foundation of innovation and user delight into every pixel !')
    .pauseFor(2500)
    .deleteChars(66)
    .typeString('architect a web of creativity and seamless user experiences together !')
    .pauseFor(2500)
    .deleteChars(69)
    .start();

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
particlesJS.load('particles-js', 'config.json', function() {
    console.log('callback - particles.js config loaded');
});
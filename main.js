requirejs.config({
    baseUrl: 'js',
    paths: {
        vendor: '../vendor',
        three: ['//cdnjs.cloudflare.com/ajax/libs/three.js/r63/three.min.js']
    }
});

define(['galaxyGenerator', 'galaxyVisualizer', 'galaxy3DVisualizer'], function (galaxyGenerator, galaxyVisualizer, galaxy3DVisualizer) {
    var galaxy = galaxyGenerator(0.6);

    //galaxyVisualizer("galaxy", galaxy);
    galaxy3DVisualizer("galaxy", galaxy);
});
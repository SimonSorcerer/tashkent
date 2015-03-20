requirejs.config({
    baseUrl: 'js',
    paths: {
        vendor: '../vendor'
    }
});

define(['galaxyGenerator', 'galaxyVisualizer'], function (galaxyGenerator, galaxyVisualizer) {
    var galaxy = galaxyGenerator(0.6);
    galaxyVisualizer("galaxy", galaxy);
});
requirejs.config({
    baseUrl: 'js',
    paths: {
        vendor: '../vendor',
        three: [
            '//cdnjs.cloudflare.com/ajax/libs/three.js/r71/three.min',
            'three.min'
        ]
    },
    shim: {
        three: {
            exports: 'THREE'
        }
    }
});

define(['galaxyGenerator', 'galaxyVisualizer', 'galaxy3DVisualizer', 'three'], function (galaxyGenerator, galaxyVisualizer, galaxy3DVisualizer, three) {
    'use strict';

    var galaxy = galaxyGenerator(0.6);

    //galaxyVisualizer("galaxy", galaxy);
    galaxy3DVisualizer('galaxy', galaxy);
});
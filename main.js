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

define(['galaxyGenerator', 'galaxy3DVisualizer'], function (galaxyGenerator, galaxy3DVisualizer) {
    'use strict';

    var galaxy = galaxyGenerator(0.6);

    galaxy3DVisualizer('galaxy', galaxy);
});
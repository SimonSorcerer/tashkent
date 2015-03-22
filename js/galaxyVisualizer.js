define(function () {
    'use strict';

    function galaxyVisualizer(elementId, galaxy) {
        var root = document.getElementById(elementId),
            canvas, ctx;

        canvas = document.createElement('canvas');
        canvas.width = 1000;
        canvas.height = 1000;
        ctx = canvas.getContext('2d');

        ctx.fillStyle = 'aliceblue';
        ctx.fillRect(0, 0, galaxy.dimensions.width, galaxy.dimensions.height);
        ctx.fillStyle = 'black';

        galaxy.stars.forEach(function (star) {
            var diameter = star.size * 2;

            ctx.fillRect(star.x - 1, star.y - 1, diameter, diameter);
        });

        root.appendChild(canvas);
    }

    return galaxyVisualizer;
});
(function() {
    function galaxyVisualizer(elementId, galaxy) {
        var root = document.getElementById(elementId),
            canvas;

        canvas = document.createElement('canvas');
        canvas.width = 1000;
        canvas.height = 1000;
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "aliceblue";
        ctx.fillRect(0, 0, galaxy.dimensions.width, galaxy.dimensions.height);
        ctx.fillStyle = "black";

        galaxy.stars.forEach(function (star) {
            ctx.fillRect(star.x - 1, star.y - 1, 3, 3);
            console.log('[stars] Written star to: ' + star.x + ', ' + star.y);
        });

        root.appendChild(canvas);
    }

    window.Tashkent = window.Tashkent || {};
    window.Tashkent.galaxyVisualizer = galaxyVisualizer;
}());
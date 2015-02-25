(function() {
    var MAX_STARS_PER_UNIT = 0.001;

    function setDefaults() {
        return {
            dimensions: {
                width: 1000,
                height: 1000
            }
        };
    }

    function generateStars(dimensions, density) {
        var starOccurrenceProbability = MAX_STARS_PER_UNIT * density,
            stars = [];

        for (var i = 0; i <= dimensions.width; i++) {
            for (var j = 0; j <= dimensions.height; j++) {
                if (Math.random() <= starOccurrenceProbability) {
                    stars.push({
                        x: i,
                        y: j
                    });
                }
            }
        }

        console.log('[stars] Generated ' + stars.length + ' stars');
        return stars;
    }

    function galaxyGenerator(density) {
        var galaxy = {},
            options;

        options = setDefaults();

        galaxy.dimensions = options.dimensions;
        galaxy.stars = generateStars(galaxy.dimensions, density || 1);

        return galaxy;
    }

    window.Tashkent = window.Tashkent || {};
    window.Tashkent.galaxyGenerator = galaxyGenerator;
}());
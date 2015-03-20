define(['starGenerator'], function (starGenerator) {
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
            stars = [],
            planetCount = 0;

        for (var i = 0; i <= dimensions.width; i++) {
            for (var j = 0; j <= dimensions.height; j++) {
                if (Math.random() <= starOccurrenceProbability) {
                    stars.push(starGenerator.generate(i, j));
                }
            }
        }

        stars.forEach(function (star) {
            planetCount += star.planets.length;
        });
        console.log('[stars] Generated ' + stars.length + ' stars');
        console.log('[planets] Generated ' + planetCount + ' planets');
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

    return galaxyGenerator;
});
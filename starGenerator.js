(function() {
    var PLANETS_PER_UNIT = 2,
        PLANET_DIVERGENCE_FACTOR = 1,
        STAR_SIZE_LIST = {
            small: 0,
            medium: 1,
            large: 2
        },
        globalPlanetCount = 0;

    function random(min, max) {
        return Math.floor(Math.random() * Math.abs(max - min + 1) + min);
    }

    function getPlanetCount(starSize) {
        var pivot = Math.abs(PLANETS_PER_UNIT * (starSize + 1)),
            divergence = Math.floor(pivot * PLANET_DIVERGENCE_FACTOR),
            min = pivot - divergence,
            max = pivot + divergence;

        return random(min, max);
    }

    function generatePlanets(starSize) {
        var planetGenerator = Tashkent.planetGenerator,
            planetCount = getPlanetCount(starSize),
            planets = [];

        globalPlanetCount += planetCount;
        while (planetCount--) {
            planets.push(planetGenerator.generate());
        }

        return planets;
    }

    function getRandomStarSize() {
        var optionsCount = Object.keys(STAR_SIZE_LIST).length;

        return random(0, optionsCount);
    }

    function generate(x, y) {
        var size = getRandomStarSize(),
            planets = generatePlanets(size);

        return {
            size: size,
            planets: planets,
            x: x,
            y: y
        };
    }

    window.Tashkent = window.Tashkent || {};
    window.Tashkent.starGenerator = {
        generate: generate
    };
}());
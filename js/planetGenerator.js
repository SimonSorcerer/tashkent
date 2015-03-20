define(function () {
    function random(min, max) {
        return Math.floor(Math.random() * Math.abs(max - min + 1) + min);
    }

    function generate() {
        return {
            size: 1,
            resources: 2,
            type: 1
        };
    }

    return {
        generate: generate
    };
});
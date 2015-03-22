define(['three'], function (Three) {
    'use strict';

    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;

    function createCamera() {
        var angle = 45,
            aspect = WIDTH / HEIGHT,
            near = 0.01,
            far = 1000,
            camera;

        camera = new Three.PerspectiveCamera(angle, aspect, near, far);
        camera.position.x = 500;
        camera.position.y = 500;
        camera.position.z = 1200;
        //camera.lookAt(0, 0, 0);

        return camera;
    }

    function createDirectionalLight() {
        var light = new Three.DirectionalLight(0xddddff, 0.6);

        light.position.set(800, 800, 500);

        return light;
    }

    function createAmbientLight() {
        return new Three.AmbientLight(0x404040);
    }

    function createScene() {
        var scene = new Three.Scene();

        scene.add(createAmbientLight());
        scene.add(createDirectionalLight());

        return scene;
    }

    function createRenderer() {
        var renderer = new Three.WebGLRenderer();

        renderer.setSize(WIDTH, HEIGHT);

        return renderer;
    }

    function createStars(radius, segments) {
        return new Three.Mesh(
            new Three.SphereGeometry(radius, segments, segments),
            new Three.MeshBasicMaterial({
                map:  Three.ImageUtils.loadTexture('images/galaxy_starfield.png'),
                side: Three.BackSide
            })
        );
    }

    function galaxy3DVisualizer(elementId, galaxy) {
        var root = document.getElementById(elementId),
            renderer,
            camera,
            scene;

        scene = createScene();
        camera = createCamera();
        renderer = createRenderer();


        galaxy.stars.forEach(function (star) {
            var diameter = star.size + 1,
                //geometry = new Three.SphereGeometry(diameter * 2, 8, 8),
                geometry = new Three.BoxGeometry(diameter, diameter, diameter),
                material = new Three.MeshPhongMaterial({
                    specular: new Three.Color('grey')
                }),
                cube = new Three.Mesh(geometry, material);

            cube.position.set(star.x, star.y, star.z);

            scene.add(cube);
        });

        scene.add(createStars(90, 64));

        root.appendChild(renderer.domElement);
        render();

        function render() {
            window.requestAnimationFrame(render, root);
            renderer.render(scene, camera);
        }

        render();
    }

    return galaxy3DVisualizer;
});
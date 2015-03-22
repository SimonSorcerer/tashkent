define(['three'], function (Three) {
    'use strict';

    function createCamera() {
        var WIDTH = window.innerWidth - 30,
            HEIGHT = window.innerHeight - 30,
            angle = 45,
            aspect = WIDTH / HEIGHT,
            near = 0.1,
            far = 300,
            camera;

        camera = new Three.PerspectiveCamera(angle, aspect, near, far);
        camera.position.set(-10, -10, -10);
        camera.lookAt(500, 500, 500);

        return camera;
    }

    function createScene() {
        var scene = new Three.Scene(),
            light;

        light = new Three.SpotLight(0xffffff, 1, 0, Math.PI / 2, 1);
        light.position.set(2000, 2000, 2000);
        light.target.position.set (0, 0, 0);

        scene.add(light);

        return scene;
    }

    function createRenderer(container) {
        var WIDTH = window.innerWidth - 30,
            HEIGHT = window.innerHeight - 30,
            renderer = new Three.WebGLRenderer({antialiasing : true});

        renderer.setSize(WIDTH, HEIGHT);
        renderer.domElement.style.position = 'relative';

        container.appendChild(renderer.domElement);
        renderer.autoClear = false;
        renderer.shadowMapEnabled = true;

        return renderer;
    }

    function galaxy3DVisualizer(elementId, galaxy) {
        var root = document.getElementById(elementId),
            renderer,
            camera,
            scene;

        camera = createCamera();
        scene = createScene();

        galaxy.stars.forEach(function (star) {
            var diameter = star.size * 2,
                geometry = new Three.BoxGeometry(diameter, diameter, diameter),
                material = new Three.MeshBasicMaterial({color: 0x00ff00}),
                cube = new Three.Mesh( geometry, material );

            cube.position.set(star.x, star.y, star.z);

            scene.add(cube);
        });

        renderer = createRenderer(root);
        renderer.render(scene, camera);
    }

    return galaxy3DVisualizer;
});
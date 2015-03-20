define(['three'], function (Three) {

    function createCamera() {
        var WIDTH = window.innerWidth - 30,
            HEIGHT = window.innerHeight - 30,
            angle = 45,
            aspect = WIDTH / HEIGHT,
            near = 0.1,
            far = 300;

        var camera = new Three.PerspectiveCamera(angle, aspect, near, far);
        camera.position.set(0, 0, 0);
        camera.lookAt(50, 50, 50);

        return camera;
    }

    function createScene() {
        var scene = new Three.Scene();

        var light = new Three.SpotLight(0xFFFFFF, 1, 0, Math.PI / 2, 1);
        light.position.set(4000, 4000, 1500);
        light.target.position.set (1000, 3800, 1000);

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
            var diameter = star.size * 2;

            var geometry = new Three.BoxGeometry(diameter, diameter, diameter);
            var material = new Three.MeshBasicMaterial( {color: 0xffffff} );
            var cube = new THREE.Mesh( geometry, material );

            cube.position.set(star.x, star.y, star.z);

            scene.add(cube);
        });

        renderer = createRenderer(root);
        renderer.render(scene, camera);
    }

    return galaxy3DVisualizer;
});
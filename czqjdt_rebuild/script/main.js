function render() { requestAnimationFrame(render), 
    tour.move(),
 weather.update(tour.t), 
 renderer.render(scene, camera) }
var container, renderer, scene, camera, world, tour, weather, sunlight, latlngs = [],
    listener;
window.onload = function() { 
    container = document.getElementById("container"), renderer = new THREE.WebGLRenderer({ antialias: !0 }),
 renderer.setSize(container.offsetWidth, container.offsetHeight), renderer.setClearColor(11579568), container.appendChild(renderer.domElement), scene = new THREE.Scene, scene.fog = new THREE.FogExp2(11579568, .002), camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 1, 5e3), camera.position.set(0, -199, 75), camera.up = new THREE.Vector3(0, 0, 1), camera.lookAt(scene.position), camera.originalQuaternion = new THREE.Quaternion, camera.originalQuaternion.copy(camera.quaternion), scene.add(camera);
    var a = new THREE.AmbientLight(16777215);
    scene.add(a), sunlight = new THREE.HemisphereLight(16777215, 16777215, 0), sunlight.color.setHSL(.6, 1, .6), sunlight.groundColor.setHSL(.095, 1, .75), sunlight.position.set(-1, 500, 1), scene.add(this.sunlight);
    var b = { scene: scene, latlngBox: [
            [100, 115],
            [25, 40]
        ], textureURL: "images/core/texture.jpg", terrainURL: "data/data2.bin", worldWidth: 4e3, worldHeight: 4e3, xNum: 399, yNum: 399 };
        
    world = new World(b), world.create();
    var c = { render: renderer, scene: scene, sceneWidth: world.worldWidth, sceneHeight: world.worldHeight, sceneDeep: 4e3, sunlight: sunlight };
    weather = new Weather(c);
 
    var d = { avatar: camera, world: world, weather: weather, scene: scene, data: tourData, forwardBtn: $("#nextStaion"), backwardBtn: $("#preStation"), jumpBtn: $(".jumpStation") };
    tour = new Tour(d);
    
    var e = subscribe("world/created", function() { 
        unsubscribe(e);
        renderer.render(scene, camera) ;
     $("#rendering").hide();
    });
    e = subscribe("tour/end", function() {}) ;
    setTimeout(function() {$(".ctrlpart .plmask .b").html('<iframe src="http://forum.home.news.cn/view/zt/201609cz/index.html"></iframe>')}, 2000);
};

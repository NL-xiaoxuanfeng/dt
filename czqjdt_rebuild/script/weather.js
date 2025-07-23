! function() {
    function a() {
        var a = this;
        a.scene.remove(a.particle.system), a.particle.container = null, a.particle.container = new THREE.Geometry, a.particle.material = a.weather[a.currentWeather].material;
        for (var b = 0; b < a.particle.density; b++) {
            var c = Math.random() * a.sceneWidth - a.sceneWidth / 2,
                d = Math.random() * a.sceneHeight - a.sceneHeight / 2,
                e = 300 * Math.random(),
                f = new THREE.Vector3(c, d, e);
            f.velocity = new THREE.Vector3(0, 0, 0), a.particle.container.vertices.push(f) }
        a.particle.system = new THREE.Points(a.particle.container, a.particle.material), a.scene.add(a.particle.system)
    }

    function b() {
        for (var a = this, b = a.particle.system.geometry.vertices, c = 0; c < b.length; c++) {
            var e = b[c];
            if (e.z < 0 && "run" == a.particle.condition) {
                var g = Math.random() * a.sceneWidth - a.sceneWidth / 2,
                    h = Math.random() * a.sceneHeight - a.sceneHeight / 2,
                    i = 300 * Math.random();
                e.x = g, e.y = h, e.z = i, e.velocity.x = e.velocity.y = e.velocity.z = 0 }("rain" == a.currentWeather || "rain" == a.formerWeather) && f(e), ("snow" == a.currentWeather || "snow" == a.formerWeather) && d(e) }
        a.particle.system.geometry.verticesNeedUpdate = !0 }

    function c() {
        var a = new THREE.PointsMaterial({ color: 16777215, size: 2, side: THREE.DoubleSide, transparent: !0 });
        return a.map = (new THREE.TextureLoader).load("images/core/snow.png"), a }

    function d(a) {
        var b = .02 * Math.random() - .01;
        a.velocity.y += b, a.velocity.y *= .98, a.y += a.velocity.y, a.z += -.2 }

    function e() {
        var a = new THREE.PointsMaterial({ color: 16777215, size: 8, side: THREE.DoubleSide, transparent: !0 });
        return a.map = (new THREE.TextureLoader).load("images/core/rain.png"), a }

    function f(a) {
        var b = -.5;
        a.velocity.z += b, a.z += a.velocity.z }

    function g(a) {
        var b = this;
        if (null !== b.formerWeather) {
            var c = b.weather[b.formerWeather].sky,
                d = b.weather[b.currentWeather].sky,
                e = h(j(c), j(d), a);
            b.render.setClearColor(e), b.scene.fog = new THREE.FogExp2(e, .002);
            var f = b.weather[b.formerWeather].sunlight,
                g = b.weather[b.currentWeather].sunlight,
                k = i(f, g, a);
            if (b.sunlight.intensity = k, b.currentWeather !== b.formerWeather) {
                var l = 1 == b.weather[b.formerWeather].particle,
                    m = 0 == b.weather[b.formerWeather].particle,
                    n = 1 == b.weather[b.currentWeather].particle;
                con4 = 0 == b.weather[b.currentWeather].particle, l && con4 && (b.particle.condition = .5 > a ? "run" : "stop"), m && n && (b.particle.condition = "run"), l && n && (b.particle.condition = .5 > a ? "stop" : "run") } } }

    function h(a, b, c) { a.r = Math.round(255 * a.r), a.g = Math.round(255 * a.g), a.b = Math.round(255 * a.b), b.r = Math.round(255 * b.r), b.g = Math.round(255 * b.g), b.b = Math.round(255 * b.b);
        var d = Math.round(a.r * (1 - c) + b.r * c),
            e = Math.round(a.g * (1 - c) + b.g * c),
            f = Math.round(a.b * (1 - c) + b.b * c);
        return new THREE.Color("rgb(" + d + "," + e + "," + f + ")") }

    function i(a, b, c) {
        return a * (1 - c) + b * c }

    function j(a) {
        return new THREE.Color(a) }
    this.Weather = function() {
        if (!arguments[0]) throw "settings are required";
        var a = arguments[0];
        for (var b in a) {
            var c = a[b];
            this[b] = c }
        this.currentWeather = "sunny", this.formerWeather = "sunny", this.particle = { container: null, system: null, material: null, density: 2e4, accFunc: null, condition: "run" }, this.bkColor = null, this.weather = { rain: { sky: 7500402, particle: !0, sunlight: 0, material: null }, snow: { sky: 11579568, particle: !0, sunlight: 0, material: null }, cloudy: { sky: 11579568, particle: !1, sunlight: .1 }, sunny: { sky: 12836094, particle: !1, sunlight: .6 } } }, Weather.prototype.initial = function() {
        var b = this;
        b.bkColor = b.weather[b.currentWeather].sky, b.render.setClearColor(b.bkColor), b.scene.fog = new THREE.FogExp2(b.bkColor, .002), b.sunlight.intensity = b.weather[b.currentWeather].sunlight, b.weather.rain.material = e(), b.weather.snow.material = c(), 1 == b.weather[b.currentWeather].particle && a.call(b) }, Weather.prototype.rain = function() {
        var b = this;
        b.currentWeather = "rain", b.bkColor = 7500402, b.render.setClearColor(7500402), b.scene.fog = new THREE.FogExp2(7500402, .002), b.sunlight.intensity = 0, a.call(b) }, Weather.prototype.snow = function() {
        var b = this;
        b.currentWeather = "snow", b.bkColor = 11579568, b.render.setClearColor(11579568), b.scene.fog = new THREE.FogExp2(11579568, .002), b.sunlight.intensity = 0, a.call(b) }, Weather.prototype.sunny = function() {
        var a = this;
        a.currentWeather = "sunny", a.bkColor = 12836094, a.render.setClearColor(12836094), a.scene.fog = new THREE.FogExp2(12836094, .002), a.sunlight.intensity = .6 }, Weather.prototype.cloudy = function() {
        var a = this;
        a.currentWeather = "cloudy", a.bkColor = 11579568, a.render.setClearColor(11579568), a.scene.fog = new THREE.FogExp2(7500402, .002), a.sunlight.intensity = 0 }, Weather.prototype.update = function(c) {
        var d = this;
        0 == c && 1 == d.weather[d.currentWeather].particle && a.call(d), g.call(d, c), (1 == d.weather[d.currentWeather].particle || 1 == d.weather[d.formerWeather].particle) && b.call(d) }
}();

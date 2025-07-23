! function() {
    function a(a, c) {
        var d = new THREE.Vector3(a.x, a.y, a.z + 30),
            e = new THREE.Vector3(c.x, c.y, c.z + 30),
            f = b(d, e),
            g = new THREE.QuadraticBezierCurve3(d, f, e);
        return g }

    function b(a, b) {
        var c = a.distanceTo(b),
            d = new THREE.Vector3;
        return d.x = (a.x + b.x) / 2, d.y = (a.y + b.y) / 2, d.z = (a.z + b.z) / 2, d.z = d.z + c / 4, d }

    function c() {
        var a = this;
        // a.weather.currentWeather = a.data[a.currentPoint].weather, a.weather.formerWeather = a.currentPoint > 0 ? a.data[a.currentPoint - 1].weather : a.weather.formerWeather
         }
    this.Tour = function() {
        if (!arguments[0]) throw "settings are required";
        var a = arguments[0];
        for (var b in a) {
            var c = a[b];
            this[b] = c }
        this.points = [], this.currentPoint = 0, this.pointNum = 0, this.markers = [], this.curve = null, this.curveQuaternion = null, this.routeGraph = null, this.speed = .005, this.rotationSpeed = .015, this.t = 0, this.storytellStart = !1, this.tourPause = !1, this.moveTheme = "next", this.jumpTarget = 0 }, Tour.prototype.create = function() {
        var a = this;
        a.routeGraph = null,  a.t = 0, a.createInterstPoints(), a.createPath(), c.call(a) }, Tour.prototype.createInterstPoints = function() {
        var a = this;
        a.points = [a.avatar.position];
        for (var b = 0; b < a.data.length; b++) {
            var c = a.data[b].location,
                d = a.world.latlngToCoordinate(c);
            a.points.push(d);
            var e = a.data[b].marker;
            a.markers.push(e) }
        a.routeGraph = new Path({ world: a.world, scene: a.scene, points: a.points }), a.routeGraph.create(), a.routeGraph.addMarkers(a.markers), a.pointNum = a.points.length }, Tour.prototype.createPath = function() {
        var b, c, d = this; "next" == d.moveTheme ? (b = d.points[d.currentPoint], c = d.points[d.currentPoint + 1]) : "pre" == d.moveTheme ? (b = d.points[d.currentPoint], c = d.points[d.currentPoint - 1]) : "jump" == d.moveTheme && (b = d.points[d.currentPoint], c = d.points[d.currentPoint + 1]), d.curve = a(b, c);
        var e = new THREE.Matrix4,
            f = new THREE.Quaternion;
        f.copy(d.avatar.quaternion), e.lookAt(b, c, d.avatar.up), d.curveQuaternion = f.setFromRotationMatrix(e) }, 
        Tour.prototype.move = function() {
        var a = this;
        if (a.t < 1) {
            var b = a.curve.getPoint(a.t);
            a.avatar.position.copy(b), a.avatar.quaternion.slerp(a.curveQuaternion, a.rotationSpeed);
            var c = a.currentPoint; "pre" == a.moveTheme && (c -= 2), a.routeGraph.updateMarker(c, a.avatar, a.t), a.t += a.speed } else a.currentPoint < a.pointNum - 1 && a.currentPoint >= 0 ? (a.tell(), a.next(), $("#nextStation").click(function() { a.currentPoint !== a.data.length - 1 && (a.moveTheme = "next", a.tourPause = !1, $(".moveCtr").css({ "pointer-events": "none" })) }), $("#preStation").click(function() { a.moveTheme = "pre", a.tourPause = !1, $(".moveCtr").css({ "pointer-events": "none" }) }), $(".jumpStation").click(function() { a.moveTheme = "jump", a.jumpTarget = parseInt($(this).attr("index")), a.tourPause = !1, $(".moveCtr").css({ "pointer-events": "none" }) })) : a.end() }, Tour.prototype.next = function() {
        var a = this;
        0 == a.tourPause && ("next" == a.moveTheme && (a.currentPoint += 1), "pre" == a.moveTheme && (a.currentPoint += 1), "jump" == a.moveTheme && (a.currentPoint = a.jumpTarget), a.createPath(), c.call(a), a.t = 0, a.storytellStart = !1) }, Tour.prototype.pre = function() { 0 == root.tourPause && (root.currentPoint -= 1, root.createPath(), c.call(root), root.t = 0, root.storytellStart = !1) }, Tour.prototype.end = function() {
        var a = this;
        publish("tour/end"), a.routeGraph.clear() }, Tour.prototype.tell = function() {
        var a = this;
        if (0 == a.storytellStart) {
            var b = a.data[a.currentPoint].story;
            b(), $(".moveCtr").css({ "pointer-events": "auto" }), $(".jumpStation").each(function(b) { b == a.currentPoint ? $(this).css("pointer-events", "none") : $(this).css("pointer-events", "auto") }), a.tourPause = !0, a.storytellStart = !0 } } }();

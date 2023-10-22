"use strict";
class snapChat {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class FaceBook extends snapChat {
    constructor(cameraMode, filter) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getSnap() {
        console.log("snap");
    }
}
const hassaaaan = new FaceBook("text", "rer");

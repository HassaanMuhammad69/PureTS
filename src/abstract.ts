abstract class snapChat {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

   abstract getSnap(): void
}


class FaceBook extends snapChat{
    constructor(
        public cameraMode: string,
        public filter: string,
    ){
        super(cameraMode,filter)
    }

    getSnap(): void {
        console.log("snap")
    }
}


const hassaaaan =new FaceBook ("text", "rer")

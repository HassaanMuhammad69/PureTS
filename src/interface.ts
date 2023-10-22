interface takePhoto {
    camera: string,
    flash: string,
    pixel: number
}

interface story{
    createStory(): void
}

class insta implements takePhoto,story {
    constructor(
        public camera: string,
        public flash: string,
        public pixel: number
    ) {
    }

    createStory(): void {
     console.log("Story is return")
    }
}

export { }
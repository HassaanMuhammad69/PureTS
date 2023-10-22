//Private public 

class User {
    constructor(
        public email: string,
        public name: string,
        private city: string =""

    ) {
    }
}

const hassan = new User("h@h", "hassan")
// hassan.city ="london"







export { }
// protected

class User {
    protected courseCount: number =8
    constructor(
        public email: string,
        public name: string,
    ) {
    }
}

class Subuser extends User{
    changeCourseCount(){
        this.courseCount=4
    }
}









export {}
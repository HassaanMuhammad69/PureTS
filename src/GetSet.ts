// geter and seter

class User {
    private courseCount: number =8
    constructor(
        public email: string,
        public name: string,
    ) {
    }


    get courses(): number{
        return this.courseCount
    }

    set Courses(courseNum:number){
            if(this.courseCount <= 1){
                throw new Error("Count is mistaken")
            }
            this.courseCount =courseNum
    }
}









export {}
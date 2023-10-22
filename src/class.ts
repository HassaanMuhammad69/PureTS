//Classes

class User{
    email:string
    name: string
    city: string ="karachi"
    constructor(email:string, name: string){
            this.email= email
            this.name= name
    }
}
const hassaan= new User("h@h", "hassan")
hassaan.city ="london"



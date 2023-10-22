"use strict";
//Private public 
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, name, city = "") {
        this.email = email;
        this.name = name;
        this.city = city;
    }
}
const hassan = new User("h@h", "hassan");

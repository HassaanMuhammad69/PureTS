"use strict";
// protected
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.courseCount = 8;
    }
}
class Subuser extends User {
    changeCourseCount() {
        this.courseCount = 4;
    }
}

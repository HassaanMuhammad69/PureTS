"use strict";
// geter and seter
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.courseCount = 8;
    }
    get courses() {
        return this.courseCount;
    }
    set Courses(courseNum) {
        if (this.courseCount <= 1) {
            throw new Error("Count is mistaken");
        }
        this.courseCount = courseNum;
    }
}

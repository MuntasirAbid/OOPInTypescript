"use strict";
class User {
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    display() {
        console.log(`userName: ${this.userName}, age: ${this.age}`);
    }
}
class Students extends User {
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`userName: ${this.userName}, age: ${this.age} id: ${this.studentId}`);
    }
    setStudentId(studentId) {
        this.studentId = studentId;
    }
    getStudentId() {
        return this.studentId;
    }
}
let stdnt1 = new Students('abid', 24, 39222333);
stdnt1.setStudentId(1000000008877);
console.log(stdnt1.getStudentId());
let user1 = new User("jonn", 26);
user1.userName = 'pinky';
// console.log(user1);

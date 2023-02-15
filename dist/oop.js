"use strict";
class Player {
    constructor(playerName, age) {
        this.playerName = playerName;
        this.age = age;
    }
    display() {
        console.log(`playerName: ${this.playerName}, age: ${this.age}`);
    }
}
class Student extends Player {
    constructor(playerName, age, studentId) {
        super(playerName, age);
        this.studentId = studentId;
    }
    display() {
        console.log(`studentName: ${this.playerName}, age: ${this.age} id: ${this.studentId}`);
    }
}
let student1 = new Student('abid', 24, 39222333);
student1.display();
let player1 = new Player("jonn", 26);
player1.display();

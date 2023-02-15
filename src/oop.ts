class Player {
    playerName: String;
    age: number;

    constructor(playerName: string, age: number) {
        this.playerName = playerName
        this.age = age
    }

    display(): void {
        console.log(`playerName: ${this.playerName}, age: ${this.age}`);
    }
}

class Student extends Player {
    studentId: number;

    constructor(playerName: string, age: number, studentId: number) {
        super(playerName, age);
        this.studentId = studentId
    }

    display(): void {
        console.log(`studentName: ${this.playerName}, age: ${this.age} id: ${this.studentId}`);
    }
}

let student1 = new Student('abid', 24, 39222333)
student1.display()

let player1 = new Player("jonn", 26)
player1.display();




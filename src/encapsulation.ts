class User {
    public userName: String;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName
        this.age = age
    }

    display(): void {
        console.log(`userName: ${this.userName}, age: ${this.age}`);
    }
}

class Students extends User {
    private studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId
    }

    display(): void {
        console.log(`userName: ${this.userName}, age: ${this.age} id: ${this.studentId}`);
    }

    setStudentId(studentId: number): void {
        this.studentId = studentId
    }

    getStudentId(): number {
        return this.studentId
    }
}

let stdnt1 = new Students('abid', 24, 39222333)
stdnt1.setStudentId(1000000008877)
console.log(stdnt1.getStudentId());

let user1 = new User("jonn", 26)
user1.userName = 'pinky'
// console.log(user1);




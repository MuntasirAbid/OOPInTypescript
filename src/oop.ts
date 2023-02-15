class Player {
    playerName: String;
    age: number;

    constructor(playerName: string, age: number) {
        this.playerName = playerName
        this.age = age
    }

    display() {
        console.log(`playerName: ${this.playerName}, age: ${this.age}`);
    }
}

let player1 = new Player("jonn", 26)
player1.display();


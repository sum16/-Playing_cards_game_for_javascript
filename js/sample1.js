class Card {
    constructor(suit, value, intValue) {
        this.suit = suit;
        this.value = value;
        this.intValue = intValue;
    }

    getCardString() {
        return this.suit + this.value + "(" + this.intValue + ")";
    }
}

class Deck {
    constructor() {
        this.deck = Deck.generateDeck();
    }

    static generateDeck() {
        let newDeck = [];
        const suits = ["♣", "♦", "♥", "♠"];
        const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                newDeck.push(new Card(suits[i], values[j], j + 1));
            }
        }
        return newDeck;
    }

    printDeck() {
        console.log("Displaying cards...")
        for (let i = 0; i < this.deck.length; i++) {
            console.log(this.deck[i].getCardString());
        }
    }
}

let deck1 = new Deck();
deck1.printDeck();
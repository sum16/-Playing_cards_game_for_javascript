// 次にデッキを表すクラスDeckを生成しましょう。
// Cardクラスを活用し、Deckクラスにトランプのカード全種類を生成させるメソッドを作成しましょう。その後、そのメソッドを使って、デッキをインスタンス化させるコンストラクタを作成します。

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
    // コンストラクタ
    constructor() {
        this.deck = Deck.generateDeck();
    }

    // デッキを生み出すメソッドを作成します。staticメソッドを使います。
    // ここではインスタンス無しでも使える関数と考えていただければ問題ありません。
    // 全記号・全ての値を用意し、for文で一つずつカードを生成します。
    static generateDeck() {
        let newDeck = [];
        const suits = ["♣", "♦", "♥", "♠"];
        const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                // j=0からスタートしているので、最後はj+1にします。トランプに0というカードが存在しないため。
                newDeck.push(new Card(suits[i], values[j], j + 1));
            }
        }
        return newDeck;
    }
}

// 新しくデッキを作成し、コンソール上に出力します
let deck1 = new Deck();
console.log(deck1);

// コンソールで確認
console.log(deck1.deck);
console.log(deck1.deck[3]);
console.log(deck1.deck[3].getCardString());
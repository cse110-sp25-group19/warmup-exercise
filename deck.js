class Card {
    /**
     * Creates a Card instance.
     * 
     * @param {string} suit The suit of the card.
     * @param {string} rank The rank of the card.
     */
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }

    /**
     * Returns the suit of the Card.
     * 
     * @returns {string} Suit of the Card.
     */
    getSuit() {
        return this.suit;
    }

    /**
     * Returns the rank of the Card.
     * 
     * @returns {string} Rank of the Card.
     */
    getRank() {
        return this.rank;
    }
}

class Deck {
    /**
     * Creates a Deck instance and initializes it with a full set of Cards.
     * The deck is sorted by suit and rank, from lowest to highest.
     */
    constructor() {
        this.suits = ['♣', '♦', '♥', '♠'];
        this.ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const savedDeck = localStorage.getItem('savedDeck');
        if (savedDeck) {
            this.deck = JSON.parse(savedDeck);
        } else {
            this.deck = this.generateDeck();
            this.saveDeck(); // save the initial deck
        }
    }

    /**
     * Generates a full deck of cards.
     * 
     * @returns {Card[]} An array containing 52 Card objects, representing a full deck of cards.
     */
    generateDeck() {
        var deck = [];
        for (let i = 0; i < this.suits.length; ++i) {
            for (let j = 0; j < this.ranks.length; ++j) {
                deck.push(new Card(this.suits[i], this.ranks[j]));
            }
        }
        return deck;
    }
    /**
     * Saves deck in local storage
     */
    saveDeck() {
        localStorage.setItem('savedDeck', JSON.stringify(this.deck));
    }
    /**
     * Prints the suits and ranks of each card and displays the total number of cards in the deck.
     */
    printDeck() {
        let n = 0;
        for (let i = 0; i < this.deck.length; ++i) {
            let currentCard = this.deck[i];
            console.log(currentCard.getRank(), currentCard.getSuit());
            n++;
        }
        console.log("Total # of Cards: ", n);
    }
    /**
     * (LocalStorage Persistence issue #18)
     * resets deck and generates new deck
     */
    resetDeck(){
        this.deck = new Deck();
        console.log("Resetted Deck")
    }
}
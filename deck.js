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
     * loads deck from local storage
     * if there is a saved deck already, load it and set our deck to the saved one
     * if there is no saved deck, generate a new deck
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
        this.deck = this.generateDeck();
        this.saveDeck();
        return this.deck()
    }

      /*
     * (Shuffle, Draw functions issue #14)
     * Shuffles deck and returns the newly shuffled deck
     * @returns popped deck
     */
    shuffleDeck(){
        //basically for each card, choose a random other card from the deck and swap places
        let d = this.deck
        for (let i = 0; i < d.length; i++) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = d[i]
            d[i] = d[j]
            d[j] = temp;
        }
        return d
    }
    /**
     * (Shuffle, Draw functions issue #14)
     * Pops a card at index 0, simulating drawing a card from a deck
     * @returns popped card(the card that was drawn)
     */
    drawCard(){
        if(!this.deck || this.deck.length == 0){
            return null
        }
        return this.deck.pop(0)
    }


    /**
        * (Team C, Issue #11)
        * Draws `n` cards from the top of the deck.
        * @param {number} n - Number of cards to draw.
        * @returns {Card[]} An array of drawn Card objects.
    */
    drawCards(n){
        const drawnCards = [];
        for(let i = 0; i < n; i++){
            if (this.deck.length === 0) {
                break; 
            }
            const card = this.drawCard();
            drawnCards.push(card);
        }
        this.saveDeck();
        return drawnCards;
    }

    /**
        * (Team C, Issue #15)
        * Shuffles the deck, draws `n` cards, logs the results, and updates the saved deck.
        * 
        * @param {number} n - The number of cards to draw from the deck.
        * @returns {Card[]} An array containing the drawn Card objects.
    */
    dealCards(n){
        this.shuffleDeck();
        const hand = this.drawCards(n);
        hand.forEach((card, i) => {
            console.log(`${card.rank} of ${card.suit} has been drawn.`);
        });
        this.saveDeck();
        return hand;
    }
}



/**
 * (Team C, Issue #19)
 * Looks for an element in HTML document that has the resetBtn id
 * and calls the resetDeck() function on click.
*/
const deck = new Deck();

// reset button listener
document.addEventListener("DOMContentLoaded", () => {
    const resetBtn = document.getElementById("resetBtn");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            deck.resetDeck();
            console.log("Deck has been reset");
        });
    }
});
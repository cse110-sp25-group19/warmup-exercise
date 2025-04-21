# Dealing Cards Documentation

## drawCards(n)
**Usage:** Draws `n` cards from the top of the deck and returns an array of drawn cards.  
**Logic:** Initializes empty array `drawnCards` to store the used cards and uses a loop to draw one card at a time using `this.drawCard()`. If the deck is empty while drawing cards, the drawing process will stop. Once all cards have been drawn, the deck is saved using `this.saveDeck()` and the array of drawn cards is returned.  

## dealCards(n)
**Usage:** Shuffles the deck, draw `n` cards, and logs results. 
**Logic:** Shuffles deck using `this.shuffleDeck()` and draws `n` cards using `this.drawCards(n)`. The cards are then logged to the console by `<rank> of <suit> has been drawn`. The deck is saved using `this.saveDeck()` and the array of drawn cards is returned.  

## Reset Button Listener
**Usage:** Resets the deck when a button with the `resetBtn` ID is clicked/touched.  
**Logic:** Listens for the `DOMContentLoaded` event and finds the button with the `resetBtn` ID. Calls `deck.resetDeck()` and logs `"Deck has been reset"` to console.

## Deal Button Listener
**Usage:** Deals a specified number of cards based on user input when a button with `deal-button` ID is clicked/touched and there is an input box with ID `deal-input`.
**Logic:** Listens for the `DOMContentLoaded` event and finds button with `deal-button` ID and the input box with the `deal-input` ID. Once clicked/touched, it reads the number of crads to deal from the input box to `dealinput.value` and checks if there are enough cards in the deck to deal the requested number. If there are enough cards, it calls `dealCards(count)` and logs the successfully dealt cards to console. Otherwise, it logs `"Not enough cards left in deck to deal"`.
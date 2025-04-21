# Card Game Project - QA and Documentation

## Project Overview
This documentation covers the Card Game Web Component implementation created for the warm-up exercise. The project implements a playing card widget with flip animation, deck management functionality, and state persistence.

## Component Architecture

### Core Components
1. **Card Visual Component** (Team A)
   - HTML/CSS layout for card display
   - Flip animation between front and back faces
   - Visual card styling

2. **Deck Logic** (Team B)
   - Card class for representing individual cards
   - Deck class for managing collections of cards
   - Shuffle and card drawing functionality

3. **Dealing & State Management** (Team C)
   - Advanced card dealing operations
   - Deck state persistence using localStorage
   - Card distribution functions

4. **QA & Documentation** (Team D - This Document)
   - Testing of all components
   - Documentation of APIs and usage
   - Integration verification

## API Documentation

### Card Class
The `Card` class represents a single playing card with a suit and rank.

#### Constructor
```javascript
new Card(suit, rank)
```
- **suit** (string): The suit of the card ('♣', '♦', '♥', '♠')
- **rank** (string): The rank of the card ('A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K')

#### Methods
- `getSuit()`: Returns the suit of the card
- `getRank()`: Returns the rank of the card

### Deck Class
The `Deck` class manages a collection of Card objects.

#### Constructor
```javascript
new Deck()
```
Creates a new deck, either by loading from localStorage or generating a fresh 52-card deck.

#### Methods
- `generateDeck()`: Creates a new standard 52-card deck
- `saveDeck()`: Persists the current deck state to localStorage
- `printDeck()`: Logs the current deck contents to the console
- `resetDeck()`: Resets to a fresh deck and saves to localStorage
- `shuffleDeck()`: Randomizes the order of cards in the deck
- `drawCard()`: Removes and returns the top card from the deck

## Integration Testing Results

### Card Rendering & Animation Tests

| Test Case | Expected Behavior | Actual Behavior | Status |
|-----------|-------------------|-----------------|--------|
| Card Display | Card renders with proper dimensions |  |  |
| Card Flip Animation | Card flips when clicked | |  |
| Back Image Display | Card back shows Powell image |  |  |
| Responsive Design | Card scales appropriately on different screens |  |  |

### Deck Logic Tests

| Test Case | Expected Behavior | Actual Behavior | Status |
|-----------|-------------------|-----------------|--------|
| Deck Creation | Creates 52 cards with proper suits and ranks |  |  |
| Card Drawing | Returns and removes top card |  |  |
| Deck Shuffling | Randomizes card order |  |  |
| Empty Deck Handling | Returns null when drawing from empty deck |  |  |

### State Management Tests

| Test Case | Expected Behavior | Actual Behavior | Status |
|-----------|-------------------|-----------------|--------|
| State Persistence | Deck state survives page reload |  |  |
| Reset Functionality | Resets to new ordered deck |  |  |
| Initialize Without Storage | Creates new deck when no saved state exists |  |  |

## Known Issues & Recommendations

### Critical Issues

### Medium Priority

### Low Priority


## Setup & Usage Guide

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/cse110-sp25-group19/warmup-exercise.git
   ```
2. Open index.html in a web browser

### Basic Usage
1. **View a Card**: Load the page to see the default card
2. **Flip a Card**: Click on the card to see the flip animation
3. **Use the Deck**:
   ```javascript
   // Create a new deck
   const deck = new Deck();
   
   // Shuffle the deck
   deck.shuffleDeck();
   
   // Draw a card
   const card = deck.drawCard();
   console.log(card.getRank() + card.getSuit());
   
   // Reset the deck
   deck.resetDeck();
   ```

## Contributors
- Team A: Design & Frontend
- Team B: Deck & State
- Team C: Advanced Dealing & State
- Team D: QA, Docs & Integration

## Testing Notes

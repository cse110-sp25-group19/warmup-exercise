# 🧩 Team Goal Structure – Warmup Exercise (Tasks 1 & 2)

This file defines the **core deliverable (Zielobjekt)** of each team, how it connects to the others, and what builds on top of it.  
The structure is intentionally sequential – one team's output becomes the foundation for the next.

---

## 🎨 Team A – Design & Frontend

### 🎯 Goal Object: *Visual Card Design and Flip Animation*

**Description:**  
Team A builds the initial **HTML/CSS layout** and defines how a playing card looks and flips.  
They implement the **flip animation** (front/back) and ensure that the card container is ready to display values later.

**Used by:**  
- Team B uses Team A’s layout to **insert suit and rank values** into the cards.  
- Team C uses the card components to **display dealt cards** visually.

---

## 🃏 Team B – Deck & State

### 🎯 Goal Object: *Deck Logic and Shuffle Functionality*

**Description:**  
Team B defines a **JavaScript model** for individual cards and the overall deck.  
They implement a **deck class/module**, including methods such as `shuffleDeck()` and `drawCard()`.

**Used by:**  
- Team A receives structured data from Team B to **populate the UI with real cards**.  
- Team C uses Team B’s deck to **build the dealing logic**, drawing and managing card state.

---

## 🔄 Team C – Advanced Dealing & State

### 🎯 Goal Object: *Dealing Logic and State Management*

**Description:**  
Team C builds upon Team B’s deck structure to implement **functions that deal cards** (e.g. `drawCards(n)`) and manage the current state of the deck.  
They also handle optional **persistence using localStorage**, so the deck state survives page reloads.

**Used by:**  
- Team A uses Team C’s functions to **enable UI buttons/actions** like “Deal 3 Cards.”  
- Team D tests Team C’s logic to ensure **state transitions and persistence** are reliable.

---

## ✅ Team D – QA, Docs & Integration

### 🎯 Goal Object: *Testing, Documentation and Integration Quality*

**Description:**  
Team D performs **manual testing** on card rendering (Team A), deck logic (Team B), and dealing behavior (Team C).  
They document how to use the app (README, tutorials), track issues via GitHub, and verify that all parts work together.

**Used by:**  
- All other teams rely on Team D’s QA feedback to **fix bugs** and improve stability.  
- The final product depends on Team D’s **documentation and integration testing** to be submission-ready.

---


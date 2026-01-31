# 🎮 Tic Tac Toe – React

This project is a **Tic Tac Toe (Morpion)** game built with **React**.  
It is a learning project created to better understand how React works and how to structure a small application.

---

## 🎯 Project Purpose

The goal of this project is to practice core React concepts such as:
- 🧠 Managing state
- 🔁 Passing data between components
- 🔄 Understanding component re-rendering
- 👀 Using conditional rendering
- 🧩 Organizing logic and UI in a clean way

---

## 🕹️ How the Game Works

The game is played by **two players, X and O**, who take turns clicking on the grid.  
Each action is stored as part of the **game history**.

Instead of storing the board directly, the game keeps track of:
- ❌ / ⭕ Which player played
- 📍 Which position was played

From this information, the current board state is rebuilt automatically.

---

## 🔄 Game Flow

- ▶️ The game starts with an empty board
- 🔁 Players alternate turns
- 🏁 The game checks after each move if there is a winner
- ⚖️ If all cells are filled and no player has won, the game ends in a draw
- 🚨 A game-over screen is displayed when the game ends
- 🔄 The game can be restarted without reloading the page

---

## ♻️ Restarting the Game

Restarting the game resets the game state and clears the board.  
React automatically updates the interface based on the new state.

---

## 🛠️ Technologies Used

- ⚛️ React
- 🟨 JavaScript
- 🧾 JSX
- 🎨 Basic CSS

---

## 📚 What This Project Teaches

This project helps understand:
- 🔍 How React updates the UI when state changes
- ✨ Why keeping state minimal is important
- 🧱 How to separate game logic from UI components
- 🔗 How data flows from parent components to child components

---

## ✅ Conclusion

This project is meant for **learning and experimentation**.  
It focuses on clarity and **React fundamentals** rather than advanced features.

Happy coding 🚀

# Tic-Tac-Toe Game

A classic Tic-Tac-Toe game implemented using JavaScript, HTML, and CSS. This project demonstrates basic DOM manipulation, event handling, and game logic implementation.

## Features

- Two-player gameplay
- Interactive game board
- Win detection
- Draw detection
- Confetti animation for winning
- Reset functionality to start a new game

## How to Play

1. Open the `index.html` file in a web browser.
2. Players take turns clicking on empty cells to place their mark (X or O).
3. The game announces the winner when a player gets three in a row (horizontally, vertically, or diagonally).
4. If all cells are filled and no winner is declared, the game ends in a draw.
5. Click the "Restart" button to start a new game at any time.

## Technical Details

- The game board is represented by a 3x3 grid of `<li>` elements.
- JavaScript is used to handle game logic and DOM updates.
- CSS is used for styling the game board and pieces.
- The [canvas-confetti](https://github.com/catdad/canvas-confetti) library is used for the winning animation.

## Future Improvements

- Add an AI opponent for single-player mode
- Implement a score tracking system
- Add sound effects
- Create a responsive design for mobile devices

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/yourusername/tic-tac-toe/issues) if you want to contribute.

## License

This project is open source and available under the [MIT License](LICENSE).

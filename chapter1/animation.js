function animationLoop() {
  // Iterate through all the items in the game
  // And move them
}

function drawingLoop() {
  // 1. Clear the canvas
  // 2. Iterate through all items
  // 3. And draw each item
}

function multipleCall() {
  // Call drawingLoop() every 20 milliseconds
  const gameLoop = setInterval(drawingLoop, 20);
  // Stop calling drawingLoop() and clear the gameLoop variable
  clearInterval(gameLoop);
}

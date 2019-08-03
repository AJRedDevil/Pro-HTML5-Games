function animationLoop() {
  // Iterate through all the items in the game
  // And move them
}

function drawingLoop() {
  // 0. Call the drawingLoop() method once after 20 milliseconds
  const gameLoop = setTimeout(drawingLoop, 20);
  // 1. Clear the canvas
  // 2. Iterate through all items
  // 3. And draw each item

  // Stop calling drawingLoop() and clear the gameLoop variable
  clearTimeout(gameLoop);
}

function multipleCall() {
  // Call drawingLoop() every 20 milliseconds
  const gameLoop = setInterval(drawingLoop, 20);
  // Stop calling drawingLoop() and clear the gameLoop variable
  clearInterval(gameLoop);
}

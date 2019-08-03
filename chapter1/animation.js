function animationLoop() {
  // Iterate through all the items in the game
  // And move them
}

function drawingLoop(nowTime) {
  // 1. Call the drawingLoop() method whenever the browser is ready to draw again
  const gameLoop = requestAnimationFrame(drawingLoop);
  // 2. Clear the canvas
  // 3. Iterate through all items
  // 4. Optionally use nowTime and the last nowTime to interpolate frames
  // 5. And draw the items

  // Stop calling drawingLoop() and clear the gameLoop variable
  clearTimeout(gameLoop);

  // Stop calling drawingLoop() and clear the gameLoop variable
  cancelAnimationFrame(gameLoop);
}

function multipleCall() {
  // Call drawingLoop() every 20 milliseconds
  const gameLoop = setInterval(drawingLoop, 20);
  // Stop calling drawingLoop() and clear the gameLoop variable
  clearInterval(gameLoop);
}

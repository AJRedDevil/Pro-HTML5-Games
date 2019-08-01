function drawRectangles(ctx) {
  // FILLED RECTANGLES
  // Draw a solid square with width and height of 100 pixels at (200, 100)
  ctx.fillRect(200, 100, 100, 100);
  // Draw a solid rectange with width of 90 pixels and height of 30 pixels at (50, 70)
  ctx.fillRect(50, 70, 90, 30);

  // STROKED RECTANGLES
  // Draw a rectangular outline with width and height of 50 pixels at (110, 10)
  ctx.strokeRect(110, 10, 50, 50);
  // Draw a rectangular outline with width and height of 50 pixels at (30, 10)
  ctx.strokeRect(30, 10, 50, 50);

  // CLEARING RECTANGLES
  // Clear a rectangle with width of 30 pixels and height of 20 pixels at (210, 20)
  ctx.clearRect(210, 20, 30, 20);
  // Clear a rectangle with width of 30 pixels and height of 20 pixels at (260, 20)
  ctx.clearRect(260, 20, 30, 20);
}

function drawComplexShapes(ctx) {
  // DRAWING COMPLEX SHAPES
  // Draw a filled triangle
  ctx.beginPath();
  ctx.moveTo(10, 120);
  ctx.lineTo(10, 180);
  ctx.lineTo(110, 150);
  ctx.fill();

  // Draw a stroked triangle
  ctx.beginPath();
  ctx.moveTo(140, 160);
  ctx.lineTo(140, 220);
  ctx.lineTo(40, 190);
  ctx.closePath();
  ctx.stroke();

  // Draw a more complex set of lines
  ctx.beginPath;
  ctx.moveTo(160, 160);
  ctx.lineTo(170, 220);
  ctx.lineTo(240, 210);
  ctx.lineTo(260, 170);
  ctx.lineTo(190, 140);
  ctx.closePath();
  ctx.stroke();

  // DRAW ARCS & CIRCLES
  // Draw a semicircle
  ctx.beginPath();
  // Draw an arc at (400, 50) with radius 40 from 0 to 180 degrees, anticlockwise
  // PI radians = 180 degrees
  ctx.arc(100, 300, 40, 0, Math.PI, true);
  ctx.stroke();

  // Draw a full circle
  ctx.beginPath();
  // Draw an arc at (500, 50) with radius 30 from 0 to 360 degrees, anticlockwise
  // 2*PI radians = 360 degrees
  ctx.arc(100, 300, 30, 0, 2 * Math.PI, true);
  ctx.fill();

  // Draw a three-quarter arc
  ctx.beginPath();
  // Draw an arc at (400, 100) with radius 25 from 0 to 270 degrees, clockwise
  // (3/2*PI radians = 270 degrees)
  ctx.arc(200, 300, 25, 0, (3 / 2) * Math.PI, false);
  ctx.stroke();
}

function drawText(ctx) {
  // DRAWING TEXT
  ctx.fillText('This is some text...', 330, 40);

  // Modify the font
  ctx.font = '10pt Arial';
  ctx.fillText('This is in 10pt Arial...', 330, 60);

  // Draw stroked text
  ctx.font = '16pt Arial';
  ctx.strokeText('This is stroked in 16pt Arial...', 330, 80);
}

function pageLoaded(id) {
  // Get a handle to the canvas object
  const canvas = document.getElementById(id);

  // Get the 2d context for this canvas
  const ctx = canvas.getContext('2d');
  drawRectangles(ctx);
  drawComplexShapes(ctx);
  drawText(ctx);
}

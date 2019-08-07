const game = {
  // Start initializing object, preloading assets and display start screen
  init: function() {
    // Get handler for game canvas and context
    game.canvas = document.getElementById('gamecanvas');
    game.context = game.canvas.getContext('2d');

    // Initialize objects
    levels.init();
    loader.init();
    mouse.init();

    // Hide all game layers and display the start screen
    game.hideScreens();
    game.showScreen('gamestartscreen');
  },

  // Screen Show/hide
  hideScreens: function() {
    const screens = document.getElementsByClassName('gamelayer');
    // Iterate through all the game layers and set their display to none
    for (let i = screens.length - 1; i >= 0; i--) {
      let screen = screens[i];
      screen.style.display = 'none';
    }
  },

  hideScreen: function(id) {
    const screen = document.getElementById(id);
    screen.style.display = 'none';
  },

  showScreen: function(id) {
    const screen = document.getElementById(id);
    screen.style.display = 'block';
  },

  showLevelScreen: function() {
    game.hideScreens();
    game.showScreen('levelselectscreen');
  },

  // Store current game state - intro, wait-for-firing,
  // fired, load - next - hero, success, failure
  mode: 'intro',

  // X & Y coordinates of the slingshot
  slingshotX: 140,
  slingshotY: 280,

  // X & Y coordinate of point where band is attached to slingshot
  slingshotBandX: 140 + 55,
  slingshotBandY: 280 + 23,

  // Flag to check if the game has ended
  ended: false,

  // The game score
  score: 0,

  // X axis offset for panning the screen from left to right
  offsetLeft: 0,

  start: function() {
    game.hideScreens();
    // Display the game canvas and score
    game.showScreen('gamecanvas');
    game.showScreen('scorescreen');

    game.mode = 'intro';
    game.currentHero = undefined;

    game.offsetLeft = 0;
    game.ended = false;

    game.animationFrame = window.requestAnimationFrame(
      game.animate,
      game.canvas
    );
  },

  handleGameLogic: function() {
    // Temporary placeholder code. Keep panning the game towards the right
    game.offsetLeft++;
  },

  animate: function() {
    // Handle paning game states, and control flow
    game.handleGameLogic();

    // Draw the background with parallax scrolling
    // First draw the background image, offset by a fraction
    // of the offsetLeft distance(1 / 4)
    // The bigger the fraction, the closer the background
    // appears to be
    game.context.drawImage(
      game.currentLevel.backgroundImage,
      game.offsetLeft / 4,
      0,
      game.canvas.width,
      game.canvas.height,
      0,
      0,
      game.canvas.width,
      game.canvas.height
    );
    // Then draw the foreground image, offset by the entire
    // offsetLeft distance
    game.context.drawImage(
      game.currentLevel.foregroundImage,
      game.offsetLeft,
      0,
      game.canvas.width,
      game.canvas.height,
      0,
      0,
      game.canvas.width,
      game.canvas.height
    );

    // Draw the base of the slingshot, offset by the
    // entire offsetLeft distance
    game.context.drawImage(
      game.slingshotImage,
      game.slingshotX - game.offsetLeft,
      game.slingshotY
    );

    // Draw the front of the the slingshot, offset by the
    // entire offsetLeft distance
    game.context.drawImage(
      game.slingshotFrontImage,
      game.slingshotX - game.offsetLeft,
      game.slingshotY
    );

    if (!game.ended) {
      game.animationFrame = window.requestAnimationFrame(
        game.animate,
        game.canvas
      );
    }
  },
};

// Initialize game once page has fully loaded
window.addEventListener('load', function() {
  game.init();
});

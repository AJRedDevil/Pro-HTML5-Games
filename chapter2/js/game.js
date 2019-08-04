const game = {
  // Start initializing object, preloading assets and display start screen
  init: function() {
    // Get handler for game canvas and context
    game.canvas = document.getElementById('gamecanvas');
    game.context = game.canvas.getContext('2d');

    // Initialize objects
    levels.init();

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
};

// Initialize game once page has fully loaded
window.addEventListener('load', function() {
  game.init();
});

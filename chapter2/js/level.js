const levels = {
  // Level data
  data: [
    {
      // First level
      foreground: 'desert-foreground',
      background: 'clouds-background',
      entities: [],
    },
    {
      // Second level
      foreground: 'desert-foreground',
      background: 'clouds-background',
      entities: [],
    },
  ],

  // Initialize level selection screen
  init: function() {
    const levelSelectScreen = document.getElementById('levelselectscreen');

    // An event handler to call
    const buttonClickHandler = function() {
      game.hideScreen('levelselectscreen');

      // Level label values are 1, 2. Levels are 0, 1
      levels.load(this.value - 1);
    };

    for (let i = 0; i < levels.data.length; i++) {
      const button = document.createElement('input');
      button.type = 'button';
      button.value = i + 1; // Level labels are 1, 2
      button.addEventListener('click', buttonClickHandler);

      levelSelectScreen.appendChild(button);
    }
  },

  // Load all data and images for a specified level
  load: function(number) {},
};

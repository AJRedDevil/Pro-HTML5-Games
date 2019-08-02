function playSound() {
  // Create a new Audio object
  const audio = document.createElement('audio');
  let mp3Support = false,
    oggSupport = false;

  if (audio.canPlayType) {
    // Currently canPlayType() returns: "", "maybe", or "probably"
    mp3Support = '' !== audio.canPlayType('audio/mpeg');
    oggSupport = '' !== audio.canPlayType('audio/ogg; codecs="vorbis"');
  }

  // Check for ogg, then mp3, and finally set soundFileExtn to undefined
  const soundFileExtn = oggSupport ? '.ogg' : mp3Support ? '.mp3' : undefined;

  if (soundFileExtn) {
    const sound = new Audio();

    // Load sound file with the detected extension
    sound.src = `./music${soundFileExtn}`;
    sound.play();
  }
}

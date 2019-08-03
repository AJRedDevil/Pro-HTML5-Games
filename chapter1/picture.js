function loadImage() {
  const image = new Image();
  image.src = './spaceship.png';
  image.onload = function() {
    alert('Image finished loading');
  };
}

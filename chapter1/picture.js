function loadImage() {
  const image = new Image();
  image.src = './spaceship.png';
  image.onload = function() {
    alert('Image finished loading');
  };
}

const imageLoader = () => ({
  loaded: true,
  loadedImages: 0,
  totalImages: 0,
  load: url => {
    this.totalImages++;
    this.loaded = false;
    let image = new Image();
    image.src = url;
    image.onload = () => {
      imageLoader.loadedImages++;
      if (imageLoader.loadedImages == imageLoader.totalImages) {
        imageLoader.loaded = true;
      }
      image.onload = undefined;
    };
    return image;
  },
});

function drawImageIndividually(context) {
  // First: (Load individual images and store in a big array)
  // Three arguments: the element, and destination (x, y) coordinates
  const image = imageArray[imageNumber];
  context.drawImage(image, x, y);
}

function drawImageFromSprite(context) {
  // First: (Load single sprite sheet image)
  // Nine arguments: the element, source (x, y) coordinates,
  // source width and height (for cropping),
  // destination (x, y) coordinates, and
  // destination width and height (resize)
  context.drawImage(
    this.spriteImage,
    this.imageWidth * imageNumber,
    0,
    this.imageWidth,
    this.imageHeight,
    x,
    y,
    this.imageWidth,
    this.imageHeight
  );
}

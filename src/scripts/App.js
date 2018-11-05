import loadButtons from './load_buttons';
import loadSprites from './load_sprites';
import Tomodachi from './Tomodachi';

function gameplay() {
  // define a variable to watch when option changes
  let valueOfSelectedOption;
  let selectedOption = {};
  Object.defineProperty(selectedOption, 'value', {
    get: function() {
      console.log('get');
      return valueOfSelectedOption;
    },
    set: function(value) {
      console.log('set');
      console.log('value');
      valueOfSelectedOption = value;
      tomo.actionHandler(value);
    }
  });

  const sprites = loadSprites();
  const [canvas] = document.getElementsByTagName('canvas');
  canvas.width = '400';
  canvas.height = '400';
  const c = canvas.getContext('2d');

  let fps;
  let fpsInterval;
  let startTime;
  let now;
  let then;
  let elapsed;

  // declare a new tomodachi
  const tomo = new Tomodachi(new Date().now, sprites.tomodachis[2], 'minnie');

  // initialize the timer variables and start the animation
  function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    // startTime = then;
    animate();
  }

  function animate() {
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    // if enough time has elapsed, draw the next frame
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      c.clearRect(0, 0, canvas.width, canvas.height);
      tomo.draw(c);
      tomo.update();
    }
  }

  loadButtons(selectedOption);
  tomo.sprite.img.onload = function() {
    startAnimating(1.5);
  };
};

export default gameplay;

import loadButtons from './load_buttons';
import loadSprites from './load_sprites';
import Tomodachi from './Tomodachi';

function gameplay() {
  let selectedOption = null;
  const sprites = loadSprites();
  const [canvas] = document.getElementsByTagName('canvas');
  canvas.width = '400';
  canvas.height = '400';
  let c = canvas.getContext('2d');
  let cur = 0;
  const framesPerSecond = 2;
  let anchorX = 200;
  let anchorY = 200;

  // function move (dx, dy, anchorX, anchorY) {
  //
  // }

  // let stop = false;
  // let frameCount = 0;
  let fps;
  let fpsInterval;
  let startTime;
  let now;
  let then;
  let elapsed;

  // initialize the timer variables and start the animation
  function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    // startTime = then;
    animate();
  }

  console.log(sprites.tomodachis[1]);
  console.log(sprites.tomodachis[1].frames);

  // time, img, name, render
  const tomo = new Tomodachi(new Date().now, sprites.tomodachis[1], 'minnie');

  function animate() {
    requestAnimationFrame(animate);
    let current = tomo.sprite.frames[cur];
    now = Date.now();
    elapsed = now - then;
    // if enough time has elapsed, draw the next frame
    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      c.clearRect(0, 0, canvas.width, canvas.height);
      // tomo.update();
      let current = tomo.sprite.frames[cur];
      c.drawImage(tomo.sprite.img,
        current.sx,
        current.sy,
        current.sWidth,
        current.sHeight,
        anchorX - (current.sWidth / 2), anchorY - (current.sHeight / 2), current.sWidth, current.sHeight);
      if (cur === 0) {
        cur = 1;
        anchorX += 0;
        anchorY += 5 / 2;
      } else {
        cur = 0;
        anchorX -= 0;
        anchorY -= 5 / 2;
      }
    }
  }


  loadButtons(selectedOption);
  tomo.sprite.img.onload = function() {
    startAnimating(1.5);
  };
};

export default gameplay;

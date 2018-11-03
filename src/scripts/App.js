import buttons from './buttons';

function gameplay() {
  buttons();
}

export default gameplay;
// // import Tomodachi from './Tomodachi';
// import Buttons from './buttons';
//
// function gameplay() {
//   var canvas = $("canvas")[0];
//   canvas.width = '400';
//   canvas.height = '400';
//   var c = canvas.getContext('2d');
//
//   /**
//     Load sprites
//   **/
//   var babyImg = new Image();
//   babyImg.src = "sprites/baby.png";
//   var baby = {
//     type: 'baby',
//     frames: [
//       {
//         sx: 20,
//         sy: 25,
//         sWidth: 46,
//         sHeight: 36
//       },
//       {
//         sx: 20,
//         sy: 105,
//         sWidth: 46,
//         sHeight: 36
//       }
//     ],
//     anchorX: 0,
//     anchorY: 0
//   };
//
//   var bunnyImg = new Image(); //Creates an HTMLImageElement
//   bunnyImg.src = "sprites/bunny.png";
//   var bunny = {
//     type: 'bunny',
//     frames: [
//       {
//         sx: 20,
//         sy: 5,
//         sWidth: 46,
//         sHeight: 71
//       },
//       {
//         sx: 15,
//         sy: 90,
//         sWidth: 56,
//         sHeight: 66
//       }],
//     anchorX: 5,
//     anchorY: 5
//   }
//
//   var bearImg = new Image();
//   bearImg.src = "sprites/bear.png";
//   var bear = {};
//
//   var spriteArray = [];
//
//
//
//   /**
//     Date & Time set-up
//   **/
//
//
//
//
//
//   /**
//     Set up animation
//   **/
//
//   var cur = 0;
//   var framesPerSecond = 2;
//   var anchorbottom = 250;
//   var anchorcenter = 250;
//
//   function move (dx, dy, anchorX, anchorY) {
//
//   }
//
//   var stop = false;
//   var frameCount = 0;
//   var fps, fpsInterval, startTime, now, then, elapsed;
//
//   // initialize the timer variables and start the animation
//
//   function startAnimating(fps) {
//       fpsInterval = 1000 / fps;
//       then = Date.now();
//       startTime = then;
//       animate();
//   }
//   //time, img, name, render
//   var tomo = new Tomodachi($.now(), bunnyImg, "Minnie", bunny);
//
//   function animate() {
//     requestAnimationFrame(animate);
//     now = Date.now();
//     elapsed = now - then;
//      // if enough time has elapsed, draw the next frame
//     if (elapsed > fpsInterval) {
//          then = now - (elapsed % fpsInterval);
//          //ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
//          c.clearRect(0, 0, canvas.width, canvas.height);
//          tomo.update();
//          //var current = bunny.frames[cur];
//          // c.drawImage(bunnyImg,
//          //   current.sx,
//          //   current.sy,
//          //   current.sWidth,
//          //   current.sHeight,
//          //   anchorcenter, anchorbottom, current.sWidth, current.sHeight);
//          // if (cur === 0) {
//          //   cur = 1;
//          //   anchorbottom += 5;
//          //   anchorcenter -= 5;
//          // } else {
//          //   cur = 0;
//          //   anchorbottom -= 5;
//          //   anchorcenter += 5;
//          // }
//     }
//   }
//
//   startAnimating(2);
// }
//
// export default gameplay;

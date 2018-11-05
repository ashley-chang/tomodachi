// ************
// Load sprites
// ************

function loadBaby() {
  const babyImg = new Image();
  babyImg.src = 'src/sprites/baby.png';
  return {
    type: 'baby',
    img: babyImg,
    frames: [
      {
        sx: 20,
        sy: 25,
        sWidth: 46,
        sHeight: 36,
      },
      {
        sx: 20,
        sy: 105,
        sWidth: 46,
        sHeight: 36,
      },
    ],
    anchorX: 0,
    anchorY: 0,
  };
}

function loadBunny() {
  const bunnyImg = new Image();
  bunnyImg.src = 'src/sprites/bunny.png';
  return {
    type: 'bunny',
    img: bunnyImg,
    frames: [
      {
        sx: 20,
        sy: 5,
        sWidth: 46,
        sHeight: 71,
      },
      {
        sx: 15,
        sy: 90,
        sWidth: 56,
        sHeight: 66,
      },
    ],
    anchorX: 0,
    anchorY: 5,
  };
}

function loadBear() {
  const bearImg = new Image();
  bearImg.src = 'src/sprites/bear.png';
  return {
    type: 'bear',
    img: bearImg,
    frames: [
      {
        sx: 10,
        sy: 15,
        sWidth: 66,
        sHeight: 61,
      },
      {
        sx: 10,
        sy: 100,
        sWidth: 66,
        sHeight: 56,
      },
    ],
    anchorX: 0,
    anchorY: 5,
  };
}

function loadSprites() {
  const baby = loadBaby();
  const bunny = loadBunny();
  const bear = loadBear();

  return {
    tomodachis: [baby, bunny, bear],
    objects: [],
  };
}

export default loadSprites;

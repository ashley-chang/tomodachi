class Tomodachi {
  constructor(time, img, name, render) {
    this.creationTime = time;
    this.name = name;
    this.img = img;
    this.render = render;
    this.type = render.type;
    this.anchorbottom = 200;
    this.anchorcenter = 200;
    this.currentFrame = 0;
    this.fullness = 0;
    this.happiness = 0;
    this.discipline = 0;
    this.isHealthy = true;
    this.isGrumpy = false;
    }

  draw() {
    c.drawImage(this.img, )
    c.drawImage(bunnyImg, render.sx, render.sy, render.sWidth, render.sHeight,
      this.anchorbottom, this.anchorcenter, current.sWidth, current.sHeight);
  }

  update() {
    if (this.currentFrame === 0) {
      cur = 1;
      anchorbottom += this.render.anchorY;
      anchorcenter -= this.render.anchorX;
    } else {
      cur = 0;
      anchorbottom -= this.render.anchorY;
      anchorcenter += this.render.anchorX;
    }
    this.draw();

  }

  minusFullness() {

  }

  minusHappiness() {

  }

  feed() {
    if (this.hunger > 100) {
      this.refuse();
    } else {
      this.hunger += 10;
      //eating animation
    }
  }

  play() {
    //directions game
  }

  scold() {
    this.discipline += 10;
    //scolding animation

  }

  wash() {
    //wash...
  }

  takeMeds() {
    if (isHealthy || isGrumpy){
      refuse();
    } else {
      //take meds
      this.isHealthy = true;
    }
  }

  toggleLights() {
      //turn canvas black
  }

  refuse() {
    //refusal animation
  }

}

export default Tomodachi;

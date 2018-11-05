class Tomodachi {
  constructor(time, sprite, name) {
    this.creationTime = time; // Date object
    this.name = name;
    this.sprite = sprite;
    this.fullness = 0;
    this.happiness = 0;
    this.discipline = 0;
    this.isHealthy = true;
    this.isGrumpy = false;
    this.isDark = false;
    this.type = sprite.type;
    this.currentFrame = 0;
    this.xPos = 200;
    this.yPos = 200;
  }

  draw(ctx) {
    const current = this.sprite.frames[this.currentFrame];
    if (this.isDark) {
      this.lightsOff(ctx);
    } else {
      ctx.drawImage(this.sprite.img,
        current.sx,
        current.sy,
        current.sWidth,
        current.sHeight,
        this.xPos - (current.sWidth / 2), this.yPos - (current.sHeight / 2), current.sWidth, current.sHeight);
    }
  }

  update() {
    if (this.currentFrame === 0) {
      this.currentFrame = 1;
      this.xPos += this.sprite.anchorX / 2;
      this.yPos += this.sprite.anchorY / 2;
    } else {
      this.currentFrame = 0;
      this.xPos -= this.sprite.anchorX / 2;
      this.yPos -= this.sprite.anchorY / 2;
    }
  }

  // handle all actions
  actionHandler(option) {
    switch(option){
      case 'food':
        break;
      case 'lights':
        this.isDark = !this.isDark;
        break;
      case 'play':
        break;
      case 'medicine':
        break;
      case 'bath':
        break;
      case 'health':
        break;
      case 'discipline':
        break;
    }
  }

  // Individual action handlers

  plusFullness() {
    // max fullness 100
    this.fullness = this.fullness <= 100 ? this.fullness + 20 : this.fullness;
  }

  minusFullness() {
    this.fullness = this.fullness <= 0 ? this.fullness : this.fullness - 20;
  }

  plusHappiness() {
    // max happiness 100
    this.happiness = this.happiness <= 100 ? this.happiness + 20 : this.happiness;
  }

  minusHappiness() {
    this.happiness = this.happiness <= 0 ? this.happiness : this.happiness - 20;
  }

  feed() {
    if (this.fullness >= 100) {
      this.refuse();
    } else {
      this.plusFullness();
    }
  }

  play() {
    this.plusHappiness();
    //directions game
  }

  scold() {
    // max discipline 100
    if (this.isGrumpy) {
      this.discipline = this.discipline <= 100 ? this.discipline + 10 : this.discipline;
      // scolding animation
    } else {
      // must be grumpy to discipline -- don't scold for no reason
      this.minusHappiness();
    }
  }

  wash() {
    this.plusHappiness();
    // remove poop
  }

  takeMeds() {
    if (this.isHealthy || this.isGrumpy) {
      refuse();
    } else {
      //take meds
      this.isHealthy = true;
    }
  }

  lightsOff(ctx) {
    //turn canvas black
    ctx.beginPath();
    ctx.fillRect(0,0,400,400);
  }
  //
  // refuse() {
  //   //refusal animation
  // }
}

export default Tomodachi;

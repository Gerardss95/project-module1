class Game {
  constructor(ctx, spaceShip) {
    this.ctx = ctx;
    this.spaceShip = spaceShip;
    this.interval = undefined;
    this.bullet = undefined;
    this.canvas = document.getElementById("star-killer");
  }

  _drawSpaceShip() {
    this.ctx.drawImage(this.spaceShip.image, 0, 0, 375, 375, this.spaceShip.position.x, this.spaceShip.position.y, 100, 100);
  }


  _mouseMovements() {
    const canvas = this.canvas;
    canvas.addEventListener('mousemove', e => {
      this.spaceShip.position.y = e.clientY - 130;
      // console.log(this.spaceShip.position.y);
    });
  }



  update() {
    this.cleanSpace();
    this._drawSpaceShip();
    

    this._drawBullet();
    if (!!this.interval) {
      this.interval = window.requestAnimationFrame(this.update.bind(this));
    }
  }
  cleanSpace() {
    this.ctx.clearRect(0, 0, 1280, 720);
  }
  start() {
    this._drawSpaceShip();
    this._mouseMovements();
    this.interval = window.requestAnimationFrame(this.update.bind(this));
    this.shoot();
  };

  _drawBullet() {
    //console.log('bullet', this.bullet);
    if (this.bullet) {

      this.ctx.drawImage(this.bullet.image, 0, 0, 320, 130, this.bullet.x+=100, this.bullet.y, 400, 20);
    }
  }

  shoot() {
    const canvas = this.canvas;
    canvas.addEventListener('click', e => {
      this.bullet = new Bullet(this.spaceShip.position);
     // console.log('click', this.bullet, this.spaceShip.position);
    });
  }



}
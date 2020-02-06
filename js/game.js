class Game {
  constructor(ctx, spaceShip) {
    this.ctx = ctx;
    this.spaceShip = spaceShip;
    this.interval = undefined;
    this.bullet = undefined;
    this.canvas = document.getElementById("star-killer");

    this.enemies = [];
    this.counterEnemies = 0;
    this.intervalEnemy= 30;
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
    
    this._counterEnemies();



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



    this._drawEnemies(this.ctx);
  };

  _drawBullet() {
    //console.log('bullet', this.bullet);
    if (this.bullet) {

      this.ctx.drawImage(this.bullet.image, 0, 0, 320, 130, this.bullet.x+=100, this.bullet.y, 400, 20);
    }
  }

  _drawEnemies() {
    this.enemies.forEach((enemy, index) => {
      if (enemy.y >= 720) {
        this.enemies.splice(index, 1);
      } else {
        enemy.enemyTrajectory();
        enemy.draw(this.ctx);
      }
    });
  }
  _counterEnemies() {
    this.counterEnemies++;
    if (this.counterEnemies === this.intervalEnemy) {
      this._enemy();
      this.counterEnemies = 0;
    }
  }

  _enemy() {
    let randomEnemy = Math.floor(Math.random() * this.spaceShip.length);
    this.enemies.push(
      new Enemy(
        this.spaceShip[randomEnemy].x,
        this.spaceShip[randomEnemy].y,
        30,
        30
      )
    );}


  shoot() {
    const canvas = this.canvas;
    canvas.addEventListener('click', e => {
      this.bullet = new Bullet(this.spaceShip.position);
     // console.log('click', this.bullet, this.spaceShip.position);
    });
  }



}
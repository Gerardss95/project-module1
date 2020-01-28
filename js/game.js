class Game {
  constructor(ctx, spaceShip) {
    this.ctx = ctx;
    this.spaceShip = spaceShip;
  }

  _drawSpaceShip() {
    //     this.ctx.fillStyle = 'cyan';  
    //    this.ctx.fillRect(50,345,50,50);
    this.ctx.drawImage(image, 0, 0, 375, 375, 50, 310, 100, 100)
  }


  _mouseMovements() {
    const canvas = document.getElementById("star-killer")
    canvas.addEventListener('mousemove', e => {
      console.log(e.clientX, e.clientY)
    });
  }

  start() {
    this._drawSpaceShip();
    this._mouseMovements()
  };




}
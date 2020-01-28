class Game {
  constructor(ctx, spaceShip) {
    this.ctx = ctx;
    this.spaceShip = spaceShip;
    this.interval = undefined;
  }

  _drawSpaceShip() {
    //     this.ctx.fillStyle = 'cyan';  
    //    this.ctx.fillRect(50,345,50,50);
    this.ctx.drawImage(this.spaceShip.image, 0, 0, 375, 375, this.spaceShip.position.x, this.spaceShip.position.y, 100, 100)
  }


  _mouseMovements() {
    const canvas = document.getElementById("star-killer")
    canvas.addEventListener('mousemove', e => {
      this.spaceShip.position.y = e.clientY;
      console.log(this.spaceShip.position.y);
    });
  }
  update(){
    this.cleanSpace();
    this._drawSpaceShip();
    if(!!this.interval){
      this.interval = window.requestAnimationFrame(this.update.bind(this));
    }
  }
  cleanSpace(){
    this.ctx.clearRect(0,0,1280,720);
  }
  start() {
    this._drawSpaceShip();
    this._mouseMovements();
    this.interval = window.requestAnimationFrame(this.update.bind(this));
    
  };




}
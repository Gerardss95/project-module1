class Game{
    constructor(ctx){
        this.ctx = ctx;
    }

  _drawSpaceShip(){
//     this.ctx.fillStyle = 'cyan';  
//    this.ctx.fillRect(50,345,50,50);
    this.ctx.drawImage(image, 0, 0, 375, 375, 50, 310, 100, 100)
  }   





start(){
    this._drawSpaceShip();
};




}
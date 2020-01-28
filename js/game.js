class Game{
    constructor(ctx){
        this.ctx = ctx;

    }

  _drawSpaceShip(){
    this.ctx.fillStyle = 'cyan';  
    this.ctx.fillRect(50,345,50,50);
      
      console.log('works')
  }   





start(){
    this._drawSpaceShip();
};




}
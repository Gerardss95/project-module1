class Game{
    constructor(ctx){
        this.ctx = ctx;

    }

  _drawSpaceShip(){
    this.ctx.fillStyle = 'green';  
    this.ctx.fillRect(50,350,50,50);
      
      console.log('works')
  }   





start(){
    this._drawSpaceShip();
};




}
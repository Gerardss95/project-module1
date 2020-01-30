class Bullet {
    constructor(initialBullet) {
        this.x = initialBullet.x - 80;
        this.y = initialBullet.y + 39;


        this.image = new Image();
        this.image.src = "../IMG/laser.png";
    };
    moveBullet(){
        this.x++
    }
}
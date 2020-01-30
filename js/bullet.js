class Bullet {
    constructor(initialBullet) {
        this.x = initialBullet.x + 95;
        this.y = initialBullet.y + 39;


        this.image = new Image();
        this.image.src = "../IMG/laser.png";
    };
}
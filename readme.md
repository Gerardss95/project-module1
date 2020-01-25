# Space Assassin

You are an expert pilot that has a mission of saving the humanity from an alien invasion. The purpose of the game is killing all the aliens you can.
The game screen is a dark screen, you are the spaceship at left and you have to kill as much aliens as possible. Each second you are alive it counts for the score, and each enemy you kill too.


* * *
## MVP

Move up and down and shoot


### Technique
Html5 __Canvas__ and Vanilla __Javascript__

### Game states

* __Start Screen__
  * Title
  * Play button
  * music on and off button to Start screen // sound effects
* __Game Screen__
  * Canvas
* __Game Over Screen__
  * Play again button
  * show Score and high score
  * Go to start screen button

### Game

* Create background
* Create player with 3 lives at left of the screen 
* Move player
  * Mouse input
* Attack from player
  * Mouse click
*  Create enemies 
* Check collision with enemies
* Check shooting from enemies if they collision with player
* If player get shot -> -1 live -> if lives = 0 -> Game Over -> Show Game Over Screen  
* If collision with enemies -> -3 lives -> if lives = 0 -> Game Over -> Show Game Over Screen
* * *

## BACK LOG

### Score
* Run counter and store score on highscore
### High score
* Create High Score Screen
* Show latest score on Start Screen
* Add high score button to Start Screen
### Music
* Add background music to game
* Add effect soun on shooting
* Add explosion sound if lives = 0 
* Add music on and off button to Start screen.


## Data structure
__main.js__
```javascript
createStartScreen(id);
createGameScreen(id);
createGameOverScreen(id);
destroyStartScreen();
destroyGameScreen();
destroyGameOverScreen();
var game = new Game({
    
  });
game.init();
```
__Game.js__
```javascript
function Game(options){};
Game.drawBackground();
Game.drawPlayer();
Game.generateEnemies();
Game.gameOver();
```
__Player.js__
```javascript
function Player(){
  this.health;
  this.speed();
  this.position();
};
Player.move();
Player.attack();
```
__Enemy.js__
```javascript
function Enemy(){
  this.health;
  this.speed;
  this.position();
};
moveForward();
moveUp();
moveDown();
enemyAttack();
```
## Links
[Github] https://github.com/Gerardss95/project-module1
[Project] https://github.com/Gerardss95/project-module1/projects/1?add_cards_query=is%3Aopen
var gameModule = angular.module("gameModule");

var moveService = gameModule.service('moveService', function() {

  this.moveGround = function(groundPanels) {
    for (var i = 0; i < groundPanels.length; i++) {
      if (groundPanels[i][0] + groundPanels[i][2] >= 0) {
        groundPanels[i][0] -= groundPanels[i][4];
      } else if (groundPanels[i][0] + groundPanels[i][2] < 0) {
        if (i == 0) {
          groundPanels[i][0] = groundPanels[groundPanels.length - 1][0] + groundPanels[i][2] - groundPanels[i][3];
        } else {
          groundPanels[i][0] = groundPanels[i - 1][0] + groundPanels[i][2];
        }
      }
    }
  };

  this.moveBullet = function(bullets, width) {
    for (var i = 0; i < bullets.length; i++) {
      if (bullets[i][0] + bullets[i][2] < width) {
        bullets[i][0] += bullets[i][3];
      } else if (bullets[i][0] + bullets[i][2] >= width) {
        bullets.splice(i, 1);
      }
    }
  };

  this.moveRocks = function(rockPanels, width) {
    for (var i = 0; i < rockPanels.length; i++) {
      if (rockPanels[i][0] + rockPanels[i][2] >= 0) {
        rockPanels[i][0] -= rockPanels[i][4];
      } else if (rockPanels[i][0] + rockPanels[i][2] < 0) {
        rockPanels[i][0] = width;
      }
    }
  };

  this.moveEnemies = function(enemies) {
    for (var i = 0; i < enemies.length; i++) {
      if (enemies[i].enemyX + enemies[i].enemyRad > 0) {
        enemies[i].enemyX -= enemies[i].enemySpeed;
      }
    }
  };

});

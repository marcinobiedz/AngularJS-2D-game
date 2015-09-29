var gameModule = angular.module("gameModule");

var validateService = gameModule.service('validateService', function() {

  this.checkGround = function(groundPanels, mainPlayer, height) {
    for (var i = 0; i < groundPanels.length; i++) {
      if (groundPanels[i][5] == 7) {
        if (mainPlayer.getPlayerX() > groundPanels[i][0] && (mainPlayer.getPlayerX() + mainPlayer.getPlayerW()) < (groundPanels[i][0] + groundPanels[i][2]) && mainPlayer.getPlayerY() == (height - mainPlayer.getPlayerH() - 100)) {
          location.reload();
        }
      }
    }
  };

  this.checkRocks = function(rockPanels, mainPlayer) {
    for (var i = 0; i < rockPanels.length; i++) {
      if (mainPlayer.getPlayerX() + mainPlayer.getPlayerW() >= rockPanels[i][0] && mainPlayer.getPlayerX() <= rockPanels[i][0] + rockPanels[i][2] && mainPlayer.getPlayerY() + mainPlayer.getPlayerH() >= rockPanels[i][1]) {
        location.reload();
      }
    }
  };


  this.checkEnemies = function(enemies, mainPlayer) {
    for (var i = 0; i < enemies.length; i++) {
      if (mainPlayer.getPlayerX() + mainPlayer.getPlayerW() >= enemies[i].enemyX - enemies[i].enemyRad && mainPlayer.getPlayerX() <= enemies[i].enemyX + enemies[i].enemyRad && mainPlayer.getPlayerY() + mainPlayer.getPlayerH() >= enemies[i].enemyY - enemies[i].enemyRad) {
        location.reload();
      }
    }
  };

  this.checkBullets = function(bullets, enemies) {
    var result = 0;
    for (var i = 0; i < bullets.length; i++) {
      for (var j = 0; j < enemies.length; i++) {
        if (bullets[i][0] + bullets[i][2] >= enemies[j].enemyX - enemies[j].enemyRad && bullets[i][1] - bullets[i][2] >= enemies[j].enemyY - enemies[j].enemyRad) {
          enemies[j].enemyHP -= 1;
          bullets.splice(i, 1);
          if (enemies[j].enemyHP == 0) {
            if (enemies[j].enemyRad == 50) {
              result = 10;
            } else {
              result = 20;
            }
            enemies.splice(j, 1);
            return result;
          }
        }
      }
    }
    return result;
  };

});

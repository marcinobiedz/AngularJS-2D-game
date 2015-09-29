var gameModule = angular.module("gameModule");

var drawService = gameModule.service('drawService', function() {

  var _ctx = null;

  this.setContext = function(ctx) {
    _ctx = ctx;
  };

  this.drawGround = function(groundPanels) {
    for (var i = 0; i < groundPanels.length; i++) {
      if (groundPanels[i][5] == 7) {
        _ctx.fillStyle = 'midnightblue';
      } else if (i % 2 == 0) {
        _ctx.fillStyle = 'SaddleBrown';
      } else {
        _ctx.fillStyle = 'Sienna';
      }
      _ctx.fillRect(groundPanels[i][0], groundPanels[i][1], groundPanels[i][2], groundPanels[i][3]);
    }
  };

  this.drawRocks = function(rockPanels) {
    for (var i = 0; i < rockPanels.length; i++) {
      _ctx.fillStyle = 'black';
      _ctx.fillRect(rockPanels[i][0], rockPanels[i][1], rockPanels[i][2], rockPanels[i][3]);
    }
  };

  this.drawEnemies = function(enemies) {
    for (var i = 0; i < enemies.length; i++) {
      _ctx.beginPath();
      _ctx.arc(enemies[i].enemyX, enemies[i].enemyY, enemies[i].enemyRad, 0, 2 * Math.PI);
      if (enemies[i].enemyGap == 500) {
        _ctx.fillStyle = 'yellow';
      } else {
        _ctx.fillStyle = 'red';
      }
      _ctx.fill();
    }
  };

  this.drawBullet = function(bullets) {
    if (bullets.length)
      for (var i = 0; i < bullets.length; i++) {
        _ctx.beginPath();
        _ctx.arc(bullets[i][0], bullets[i][1], bullets[i][2], 0, 2 * Math.PI);
        _ctx.fillStyle = 'white';
        _ctx.fill();
      }
  };

  this.drawPlayer = function(mainPlayer, width) {
    if (mainPlayer.getJumpKey() && mainPlayer.getJumpCoef() >= 0 && mainPlayer.getJumpCoef() <= 14) {
      mainPlayer.setPlayerY(mainPlayer.getPlayerY() - 6);
      mainPlayer.setJumpCoef(mainPlayer.getJumpCoef() + 1);
    } else if (mainPlayer.getJumpKey() && mainPlayer.getJumpCoef() >= 15 && mainPlayer.getJumpCoef() <= 29) {
      mainPlayer.setPlayerY(mainPlayer.getPlayerY() + 6);
      mainPlayer.setJumpCoef(mainPlayer.getJumpCoef() + 1);
    } else if (mainPlayer.getJumpCoef() > 29) {
      mainPlayer.setJumpCoef(0);
      mainPlayer.setJumpKey(false);
    }
    //Moving right or left
    if (mainPlayer.getRightKey()) mainPlayer.setPlayerX(mainPlayer.getPlayerX() + 5);
    else if (mainPlayer.getLeftKey()) mainPlayer.setPlayerX(mainPlayer.getPlayerX() - 5);
    //drawing yout player
    if (mainPlayer.getPlayerX() <= 10) mainPlayer.setPlayerX(10);
    if ((mainPlayer.getPlayerX() + mainPlayer.getPlayerW()) >= width / 2) mainPlayer.setPlayerX(width / 2 - mainPlayer.getPlayerW());
    _ctx.fillStyle = 'green';
    _ctx.fillRect(mainPlayer.getPlayerX(), mainPlayer.getPlayerY(), mainPlayer.getPlayerW(), mainPlayer.getPlayerH());
  };

});

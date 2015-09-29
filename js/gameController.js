var gameModule = angular.module("gameModule", []);

var gameController = gameModule.controller("gameController", ['$scope', 'drawService', 'moveService', 'validateService', 'Player', 'SmallEnemy', 'BigEnemy', function($scope, drawService, moveService, validateService, Player, SmallEnemy, BigEnemy) {

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  $scope.userPoints = 0;
  var mainPlayer = new Player(10, 25, 100, height);
  //initialize ground
  var groundPanels = [];
  var panel_x = 0;
  var panel_y = height - 100;
  var panel_w = 75;
  var panel_h = 100;
  var speed = 3;
  var groundPanelsTotal = Math.floor(width / panel_w) + 3;
  for (var i = 0; i < groundPanelsTotal; i++) {
    var type = i % 8;
    groundPanels.push([panel_x, panel_y, panel_w, panel_h, speed, type]);
    panel_x += panel_w;
  };
  //initialize rocks
  var rockPanels = [];
  var rPanel_x = width;
  var rPanel_y = height - 100 - 50;
  var rPanel_w = 30;
  var rPanel_h = 50;
  var rSpeed = 3;
  var rockPanelsTotal = 1;
  for (var i = 0; i < rockPanelsTotal; i++) {
    rockPanels.push([rPanel_x, rPanel_y, rPanel_w, rPanel_h, rSpeed]);
  };
  //initialize bullets lock
  var bulletTotal = 3;
  var bullets = [];
  //==========initialize enemies===========================================================
  var enemies = [];
  for (var i = 0; i < 12; i++) {
    if (i % 2 == 0) {
      if (enemies.length == 0) enemies.push(new SmallEnemy(width + SmallEnemy.showEnemyRad(), height));
      else enemies.push(new SmallEnemy(enemies[enemies.length - 1].enemyX + SmallEnemy.showEnemyGap(), height));
    } else {
      enemies.push(new BigEnemy(enemies[enemies.length - 1].enemyX + BigEnemy.showEnemyGap(), height));
    }
  };
  //----------------------------------------------------------------------------------------------
  function clearCanvas() {
    ctx.clearRect(0, 0, width, height);
  };

  function keyDown(e) {
    if (e.keyCode == 39) mainPlayer.setRightKey(true);
    else if (e.keyCode == 37) mainPlayer.setLeftKey(true);
    else if (e.keyCode == 32) mainPlayer.setJumpKey(true);
    if (e.keyCode == 66 && bullets.length <= bulletTotal - 1) bullets.push([mainPlayer.getPlayerX(), mainPlayer.getPlayerY() + (mainPlayer.getPlayerH() / 2), 5, 10]);
  };

  function keyUp(e) {
    if (e.keyCode == 39) mainPlayer.setRightKey(false);
    else if (e.keyCode == 37) mainPlayer.setLeftKey(false);
  };


  $scope.init = function() {
    drawService.setContext(ctx);
    setInterval($scope.gameLoop, 20);
    document.addEventListener('keydown', keyDown, false);
    document.addEventListener('keyup', keyUp, false);
  };

  $scope.gameLoop = function() {
    $scope.$apply(function() {
      clearCanvas();
      moveService.moveGround(groundPanels);
      moveService.moveRocks(rockPanels, width);
      moveService.moveBullet(bullets, width);
      moveService.moveEnemies(enemies);
      drawService.drawGround(groundPanels);
      drawService.drawBullet(bullets);
      drawService.drawEnemies(enemies);
      drawService.drawRocks(rockPanels);
      drawService.drawPlayer(mainPlayer, width);
      validateService.checkEnemies(enemies, mainPlayer);
      validateService.checkRocks(rockPanels, mainPlayer);
      validateService.checkGround(groundPanels, mainPlayer, height);
      var result = validateService.checkBullets(bullets, enemies);
      $scope.userPoints = $scope.userPoints + result;
    });
  };
  $scope.init();
}]);

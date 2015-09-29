var gameModule = angular.module("gameModule");

var smallEnemyFactory = gameModule.factory('SmallEnemy', function() {
  function SmallEnemy(enemyX, height) {
    // Public properties, assigned to the instance ('this')
    this.enemyHP = 1;
    this.enemySpeed = 5;
    this.enemyRad = 50;
    this.enemyGap = 500;
    this.enemyX = enemyX;
    this.enemyY = height - 100 - this.enemyRad;
  }
  SmallEnemy.showEnemyRad = function() {
    return 50;
  };
  SmallEnemy.showEnemyGap = function() {
    return 500;
  };
  return SmallEnemy;
});

var bigEnemyFactory = gameModule.factory('BigEnemy', function() {
  function BigEnemy(enemyX, height) {
    // Public properties, assigned to the instance ('this')
    this.enemyRad = 100;
    this.enemyGap = 1000;
    this.enemyHP = 2;
    this.enemySpeed = 6;
    this.enemyX = enemyX;
    this.enemyY = height - 100 - this.enemyRad;
  }
  BigEnemy.showEnemyRad = function() {
    return 100;
  };
  BigEnemy.showEnemyGap = function() {
    return 1000;
  };
  return BigEnemy;
});

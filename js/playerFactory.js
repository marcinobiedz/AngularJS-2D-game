var gameModule = angular.module("gameModule");

var playerFactory = gameModule.factory('Player', function() {
  //Private property
  var _playerX = 0;
  var _playerY = 0;
  var _playerW = 0;
  var _playerH = 0;
  var _rightKey = false;
  var _leftKey = false;
  var _jumpKey = false;
  var _jumpCoef = 0;
  //Constructor, with class name
  function Player(playerX, playerW, playerH, height) {
    // Public properties, assigned to the instance ('this')
    _playerX = playerX;
    _playerW = playerW;
    _playerH = playerH;
    _playerY = height - 100 - playerH;
  };
  //Public method, assigned to prototype
  //Getters
  Player.prototype.getPlayerX = function() {
    return _playerX;
  };
  Player.prototype.getPlayerY = function() {
    return _playerY;
  };
  Player.prototype.getPlayerW = function() {
    return _playerW;
  };
  Player.prototype.getPlayerH = function() {
    return _playerH;
  };
  Player.prototype.getRightKey = function() {
    return _rightKey;
  };
  Player.prototype.getLeftKey = function() {
    return _leftKey;
  };
  Player.prototype.getJumpKey = function() {
    return _jumpKey;
  };
  Player.prototype.getJumpCoef = function() {
    return _jumpCoef;
  };
  //Setters
  Player.prototype.setJumpCoef = function(jumpCoef) {
    _jumpCoef = jumpCoef;
  };
  Player.prototype.setJumpKey = function(jumpKey) {
    _jumpKey = jumpKey;
  };
  Player.prototype.setLeftKey = function(leftKey) {
    _leftKey = leftKey;
  };
  Player.prototype.setRightKey = function(rightKey) {
    _rightKey = rightKey;
  };
  Player.prototype.setPlayerH = function(playerH) {
    _playerH = playerH;
  };
  Player.prototype.setPlayerW = function(playerW) {
    _playerW = playerW;
  };
  Player.prototype.setPlayerY = function(playerY) {
    _playerY = playerY;
  };
  Player.prototype.setPlayerX = function(playerX) {
    _playerX = playerX;
  };
  //Return the constructor function
  return Player;
});

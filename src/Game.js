// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const runInteractiveConsole = require('./keyboard.js');
const Boomerang = require('./game-models/Boomerang');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.boomerang = new Boomerang();
    this.hero = new Hero(0, this.boomerang);
    this.enemy = new Enemy(this.trackLength - 1);
    this.view = new View();
    this.track = [];
    this.flyId = null;
    this.regenerateTrack();
  }

  regenerateTrack() {
    this.track = (new Array(this.trackLength)).fill('  ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    if(this.boomerang.inAir) {
      this.track[this.boomerang.position] = this.boomerang.skin;
    }

  check() {
    if (this.boomerang.position <= this.hero.position && !this.boomerang.direction) {
      this.boomerang.inAir = false;
      this.boomerang.position = Infinity;
      this.boomerang.position = this.hero.position;
      clearInterval(this.flyId);
    }
  }

  play() {
    setInterval(() => {
      // Let's play!
      runInteractiveConsole(this);
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    });
  }
}

module.exports = Game;

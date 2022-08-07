// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
// const Boomerang = require('./game-models/Boomerang');
const View = require("./View");
const runInteractiveConsole = require("./keyboard.js");
const Boomerang = require("./game-models/Boomerang");

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength, name, score = 0 }) {
    this.trackLength = trackLength;
    this.name = name;
    this.score = score;
    this.boomerang = new Boomerang();
    this.hero = new Hero(0, this.boomerang);
    this.enemies = [new Enemy(this.trackLength - 1)];
    this.view = new View();
    this.track = [];
    this.flyId = null;
    this.regenerateTrack();
  }

  regenerateTrack() {
    this.track = new Array(this.trackLength).fill("  ");
    this.track[this.hero.position] = this.hero.skin;
    this.enemies.forEach((enemy) => (this.track[enemy.position] = enemy.skin));
    if (this.boomerang.inAir) {
      this.track[this.boomerang.position] = this.boomerang.skin;
    }
  }

  check() {
    if (
      this.boomerang.position <= this.hero.position &&
      !this.boomerang.direction
    ) {
      this.boomerang.inAir = false;
      this.boomerang.position = undefined;
      clearInterval(this.flyId);
    }

    if (this.boomerang.position >= this.trackLength - 1) {
      this.boomerang.direction = false;
    }

    this.enemies.forEach((enemy) => {
      if (enemy.position <= this.boomerang.position) {
        this.boomerang.direction = false;
        this.score ++
        enemy.die();
      }
      if (this.hero.position === enemy.position) {
        this.hero.die(this.name, this.score);
      }
    });
  }

  randomEnemyCreate = () => Math.random() > 0.5;

  play() {
    runInteractiveConsole(this);

    // создаем нового врага
    setInterval(() => {
      if (this.randomEnemyCreate()) {
        this.enemies.push(new Enemy(this.trackLength - 1));
      }
    }, 700);

    // двигаем всех врагов
    setInterval(() => {
      this.enemies.forEach((enemy) => {
        enemy.moveLeft();
      });
    }, 200);

    setInterval(() => {
      this.regenerateTrack();
      this.view.render(this.track);
    }, 10);
    setInterval(() => {
      this.check();
    });
  }
}

module.exports = Game;

// Наш герой.

const Boomerang = require("./Boomerang");

class Hero {
  constructor(position, boomerang) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position;
    this.boomerang = boomerang;
  }

  moveLeft() {
    if (this.position > 0) {
      this.position -= 1;
    }
  }

  moveRight() {
    this.position += 1;
  }

  attack() {
    this.boomerang.position = this.position + 1;
    return this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;

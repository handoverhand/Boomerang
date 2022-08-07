// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

const Enemy = require("./Enemy");
const Hero = require("./Hero");

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = undefined;
    this.direction = null;
    this.inAir = false;
  }

  fly() {
    this.inAir = true;
    this.direction = true;
    return setInterval(() => {
      if (this.direction) {
        this.position += 1;
      } else {
        this.position -= 1;
      }
    }, 50)
  }
}

module.exports = Boomerang;

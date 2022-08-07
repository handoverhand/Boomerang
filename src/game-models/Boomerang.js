// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = Infinity;
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
    }, 50);
  }
}

module.exports = Boomerang;

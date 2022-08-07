// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');
const Hero = require('./game-models/Hero');

function runInteractiveConsole(game) {
  const keyboard = {
    a: () => game.hero.moveLeft(),
    d: () => game.hero.moveRight(),
    space: () => {
      if(!game.boomerang.inAir) {
        game.flyId = game.hero.attack()
      }
    },
  };

  keypress(process.stdin);
  process.stdin.on('keypress', (_, key) => {
    if (key) {
      if (key.name in keyboard) {
        keyboard[key.name]();
      }

      if (key.ctrl && key.name === 'z') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}


module.exports = runInteractiveConsole;

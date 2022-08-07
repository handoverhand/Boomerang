
const Game = require('./src/Game');
const readline = require("readline").promises;
const rl = readline.createInterface(process.stdin)


async function start() {
  try {
    console.log('Введите имя')
    const name = await rl.question("");
    const game = new Game({
      trackLength: 30,
      name,
    });
    game.play();
  }
  catch (error) {
    console.log(error.message);
  }
}

// Запуск игры.
start();


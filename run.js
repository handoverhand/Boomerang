// Основной файл.
// Запускает игру.
const Game = require('./src/Game');
const insertName = require('./src/registration');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});

// Запуск игры.
game.play();

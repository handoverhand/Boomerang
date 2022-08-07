const { Sequelize } = require('sequelize');
const readline = require('readline');
const { Leaderboard } = require('../db/models');

async function insertName(name) {
  try {
    const result = await Leaderboard.create({ name });
  } catch (error) {
    console.log(error.message);
  }
}
const greet = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout,
  },
  greet.question('Введи свое имя герой ', (data) => {
    console.log(`Удачи перчик ! +  ${data}`);
    insertName(data);
  }),
);
module.exports = greet;

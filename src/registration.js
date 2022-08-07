const { Sequelize } = require('sequelize');
const readline = require('readline').promises;
const { Leaderboard } = require('../db/models');

async function insertName(name) {
  try {
    await Leaderboard.create({ name });
  } catch (error) {
    console.log(error.message);
  }

  const greet = readline.createInterface(
    {
      input: process.stdin,
      output: process.stdout,
    },
  );
  const textName = await greet.question('Введи свое имя герой ');
  console.log(`Удачи перчик ! +  ${textName}`);
}
module.exports = insertName;

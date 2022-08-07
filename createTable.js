const { LeaderBoard } = require('./db/models/');

async function createLeaderBoard({ username, score }) {
  try {
    const newLeaderBoard = await LeaderBoard.create({ username, score });
    // console.log(newLeaderBoard);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = createLeaderBoard;
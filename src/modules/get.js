import refreshDom from './dom.js';

const gameID = 'nymmODQ9ZmxcB45yclp6';
const submitScores = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;
const message = document.createElement('div');
message.classList.add('message-div');

const refresh = async () => {
  const result = await fetch(submitScores, {
    method: 'get',
  });

  const response = await result.json();
  refreshDom(response);
};

export default refresh;
const header = new Headers({ 'Content-type': 'application/json; charset=UTF-8' });

const gameID = 'nymmODQ9ZmxcB45yclp6';
const submitScores = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`;
const username = document.querySelector('#username');
const userscore = document.querySelector('#userscore');
const message = document.createElement('div');
message.classList.add('message-div');

const submit = async () => {
  const data = {
    user: `${username.value}`,
    score: `${userscore.value}`,
  };
  const result = await fetch(submitScores, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: header,
  });

  const response = await result.json();
  if (response.result) {
    message.innerText = response.result;
  } else {
    message.innerText = response.message;
  }
  document.body.append(message);
  setTimeout(() => { message.remove(); }, 3000);
};

export default submit;

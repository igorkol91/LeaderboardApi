const resultContainer = document.querySelector('.scores-div');

const refreshDom = (array) => {
  resultContainer.innerHTML = '';
  let newArray = array.result;
  newArray = newArray.sort((a, b) => b.score - a.score);
  (newArray).forEach((element) => {
    const userOutput = document.createElement('p');
    userOutput.classList = ('font-weight m-3');
    userOutput.innerText = `${element.user} : ${element.score}`;
    resultContainer.append(userOutput);
  });
};

export default refreshDom;
const resultContainer = document.querySelector('.scores-div');

const refreshDom = (array) => {
  resultContainer.innerHTML = '';
  const newArray = array.result;
  newArray.sort();
  (newArray).forEach((element) => {
    const userOutput = document.createElement('p');
    userOutput.classList = ('font-weight m-3');
    userOutput.innerText = `${element.user} : ${element.score}`;
    resultContainer.append(userOutput);
  });
};

export default refreshDom;
const btnNode = document.querySelector('button').addEventListener('click', myClick);
const inputNodeOne = document.querySelector('.input1');
const inputNodeTwo = document.querySelector('.input2');
const resultNode = document.querySelector('.result');


async function getResponse(valueOne, valueTwo) {
  return fetch (`https://dummyimage.com/${valueOne}x${valueTwo}/`)
  .then ((response) => {
    return response;
  })
  .then(data => data.url)
  .catch(() => {
    console.log('error')
  });

}


async function myClick() {
  //console.log('work');
  const valueOne = document.querySelector('.input1').value;
  const valueTwo = document.querySelector('.input2').value;

  if (valueOne < 100 || valueOne > 300 || valueTwo < 100 || valueTwo > 300 || isNaN(valueOne) || isNaN(valueTwo)) {
    resultNode.innerHTML = 'число вне диапазона от 100 до 300';
  } else {
    const requestResult = await getResponse(valueOne, valueTwo);
    image = document.createElement('img');
    image.src = requestResult;
    resultNode.append(image);
  }
}



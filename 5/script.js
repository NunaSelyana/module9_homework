const btnNode = document.querySelector('button').addEventListener('click', myClick);
const inputNodeOne = document.querySelector('.input1');
const inputNodeTwo = document.querySelector('.input2');
const resultNode = document.querySelector('.result');

document.addEventListener("DOMContentLoaded", () => {
    storageItem = localStorage.getItem('lastResponse')
    if (storageItem) {
        getResult(JSON.parse(storageItem));
    }
});

function getResponse(page, limit) {
  return fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`)
  .then ((response) => {
    return response;
  })
  .then(data => {
    result = data.json();
    return result;
  })
  .catch(() => {
    console.log('error')
  });
}

function getResult(apiData) {
    let cards = '';
    apiData.forEach(item => {
        const cardBlock = `
        <div class="card">
           <img class="card-img" src="${item.url}">
        </div>
        `;
        cards += cardBlock;
    });
    resultNode.innerHTML = cards;
}

async function myClick() {
  console.log('work');

  const page = Number(inputNodeOne.value);
  const limit = Number(inputNodeOne.value);
  const errPage = isNaN(page) || page < 1 || page > 10;
  const errLimit = isNaN(limit) || limit < 1 || limit > 10;
  if (errPage) {
     resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    }
    if (errLimit) {
        resultNode.innerHTML = 'Лимит вне диапазона от 1 до 10';
    }
    if (errPage && errLimit) {
        resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    }
    if (!errPage && !errLimit) {
        const requestResult = await getResponse(page, limit);
        localStorage.setItem('lastResponse', JSON.stringify(requestResult));
        getResult(requestResult);
    }
}






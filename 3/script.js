
function useRequest(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
        console.log(xhr.response);
      }
    } 
    };
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
  }; //use request

const resultNode = document.querySelector('.result');

function displayResult(apiData) {
  let cards = '';
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.url}"
          class="card-image"
        />
      </div>
    `;
    cards = cards + cardBlock;
  });
    
  resultNode.innerHTML = cards;
}

const btnNode = document.querySelector('button').addEventListener('click', myClick);

function myClick() {
  //console.log('work');

  const value = document.querySelector('input').value;
  const minValue = 1;
  const maxValue = 10;
  const requestURL = `https://jsonplaceholder.typicode.com/photos?_limit=${value}`;
  if (value < minValue || value > maxValue) {
    resultNode.innerHTML = 'число вне диапазона от 1 до 10';
  } else {
    useRequest(requestURL, displayResult);
  }
}
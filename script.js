const btnSomar = document.getElementById('button');
const input = document.getElementById('input');
const numberEl = document.getElementById('number');
const resultEl = document.getElementById('result');



btnSomar.addEventListener('click', () => {
  const DEFAULT_NUMBER = 10;
  const value = Number(input.value);
    const result = DEFAULT_NUMBER + value;
  
  if(Number.isNaN(result)){
    resultEl.innerText = '#ERROR';
    resultEl.style.color = 'red';
  }
  else {
    numberEl.innerText = value;
    resultEl.innerText = result;
    resultEl.style.color = 'black';
  }
 
  
})
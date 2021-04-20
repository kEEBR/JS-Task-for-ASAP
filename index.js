let banknotes = [5000, 1000, 500, 100, 50];
let ch = [0, 0, 0, 0, 0]; // Массив счётчиков, который соответствует количеству банкнот
// Или let ch=[]. Тогда см. 42 строку
let bank = {};
let warn = "warn";
function getMoney(amount) {
  let i = 0;
  if(i!=-1) {
    banknotes.forEach(e, () => {
        bank[banknotes[e]] = ch[i];
        i++;
      });
  } else {
      i--;
  }
  
  
}

function setMoneyResultInNode(getMoneyResult) {}

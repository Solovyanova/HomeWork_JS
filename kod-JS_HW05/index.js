//1
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  
  console.log (min(8, 4))
  console.log (min(6, 6))

  //2
  let i = prompt("Введите любое число, чтобы узнать четное оно или нечетное")
  function evenOrOdd(i) {
    if (i % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  if (i % 2 === 0) {
    alert(`число ${i} четное`);
  } else {
    alert(`число ${i} нечетное`);
  }


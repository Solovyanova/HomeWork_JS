//1
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  
alert (min(8, 4))
alert (min(6, 6))

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

  //3.1
  function func (a) {
	let square = a**2;
	console.log (`Квадрат этого числа равен ${square}`);
    }
let a = Number (prompt ("Введите любое число, чтобы узнать квадрат этого числа"))
func (a)

//3.2
function func(b) {
	return b**2;
}
let b = Number(prompt("Введите любое число, чтобы узнать квадрат этого числа"))
let result = func (b);
alert (result);

//4
let age = Number(prompt('Сколько вам лет?'));
function checkAge(age) {
  if (age >= 12) {
    return `Привет, друг!`;
  } else if(age <= 0){
return confirm `Вы ввели неправильное значение`;
} else {
    return `Добро пожаловать!`;
  }
}

 checkAge (age) 
if (age <= 12) {
  alert( `Привет, друг!`);
} else if (age <= 0) {
alert (`Вы ввели неправильное значение`);
} else {
  alert(`Добро пожаловать!`);
}

//5
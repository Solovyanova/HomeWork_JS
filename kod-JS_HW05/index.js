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
  function evenOrOdd() {
    if (i % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  evenOrOdd(i)


  //3.1
  function func (a) {
	let square = a**2;
	console.log (`Квадрат этого числа равен ${square}`);
    }
let a = Number (prompt ("Введите любое число, чтобы узнать квадрат этого числа"))
func (a)
console.log (func (a));

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


//5
let firstNum = Number(prompt('Введите первое число'));
let secondNum = Number(prompt('Введите второе число'));
function calc (){
    if (isNaN(firstNum) || isNaN(secondNum)) {
        return `Одно или оба значения не являются числом`;
    } else {
        return firstNum * secondNum;
    }
}
calc (firstNum, secondNum)

//6
let figure = Number(prompt("Введите число"));
function cube() {
if (isNaN(figure)) {
return `Переданный параметр не является числом`;
} else {
return `${figure} в кубе равняется ${figure ** 3}`;
}
}
cube (figure) 


 //7
 function getArea() {
    return`Площадь круга ${3.14 * this.radius ** 2}`;
    }
    
    function getPerimeter () {
    return`Периметр окружности ${2 * 3.14 * this.radius}`
    }
    
    
    const circle1 = {
    radius: 3,
    getArea: getArea,
    getPerimeter: getPerimeter,
    }
    
    const circle2 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter,
    }
    
    console.log(circle1.getArea());
    console.log(circle1.getPerimeter());
    console.log(circle2.getArea());
    console.log(circle2.getPerimeter());
    
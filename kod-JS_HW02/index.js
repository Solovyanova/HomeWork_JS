let a = 10;
alert(a);
let b = 20;
alert(b);


let number;
number = 2007;
alert(number);

let userName = 'Brendan Eyck';
alert (userName);

let c = 10;
let d = 2;
let plus = c+d;
alert (plus)
let minus = c-d;
alert (minus)
let mult = c*d;
alert (mult)
let division = c/d;
alert (division)

let up = Number(alert('Желаете узнать сколько будет 2 в 5й степени?'))
let result = 2 ** 5;
alert (` 2 в 5й степени будет ${result}`);

alert('Желаете узнать какой будет остаток отделения 9 на 2?')
let aa = 9;
let bb = 2;
let rest = aa % bb;
if (rest === 0) {
	console.log('делится нацело');
}
 else {
	console.log('делится с остатком ' + rest);
}
alert(`остаток от деления 1`);

let num1 = 1;
num1 += 5;
num1 -= 3;
num1 *= 7;
num1 /= 3;
alert(++num1)
alert(--num1)
alert(num1);

let age = Number(prompt('Сколько вам лет?'));
alert(`Вам ${age} лет?`)
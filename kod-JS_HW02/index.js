//1
let a = 10;
alert(a);
let b = 20;
alert(b);

//2
let number;
number = 2007;
alert(number);

//3
let userName = 'Brendan Eyck';
alert (userName);

//4
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

//5
let up = Number(alert('Желаете узнать сколько будет 2 в 5й степени?'))
let result = 2 ** 5;
alert (` 2 в 5й степени будет ${result}`);

//6
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

//7
let num = 1;
num += 5;
alert(num += 5);
num -= 3;
alert(num -= 3);
num *= 7;
alert(num *= 7);
num /= 3;
alert(num /= 3);
alert(++num)
alert(--num)
alert(num);

//8
let age = Number(prompt('Сколько вам лет?'));
alert(`Вам ${age} лет?`)

//9.0
const firstuser = {
	name: 'Vasiliy',
	age: 28,
	}
console.log(firstuser.name); //'Vasiliy'
console.log(firstuser.age); //28
firstuser.isAdmin = true;
console.log(firstuser['age']); //28
firstuser['isAdmin'] = true;

//9.1
firstuser ["city_of_residence"] = 'London';
console.log(firstuser); 

//9.2
age.t = 28;
console.log(age.t); //28

//9.3
delete city_of_residence;

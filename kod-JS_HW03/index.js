//1
let password = String( prompt ("Введите пароль"));
(password === 'Solovyanova')?
console.log ('Пароль введен верно') : 
console.log ('Пароль введен неправильно');

//2
let c = Number( prompt ("Введите число от 0 до 10"));
if (c>0 && c<10){
console.log ('Верно')
} else {
console.log ('Неверно');
}

//3
let d = Number( prompt ("Сколько букв в вашем имени `(`введите числ от 0 до 100 `)`")); 
let e = Number( prompt ("Сколько букв в вашей фамилии `(`введите число от 0 до 100`)`"));
if (d>100 || e>100){
console.log ('Верно')
} else {
console.log ('Неверно');
}

//4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
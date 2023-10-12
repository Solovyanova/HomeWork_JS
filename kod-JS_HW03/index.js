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
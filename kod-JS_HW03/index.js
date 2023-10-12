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

//5
let monthNumber = prompt('Введите номер месяца в году и узнайте к какому сезону этот месяц принадлежит');

if (monthNumber === '1'  || monthNumber === '01') {
  console.log('Сезон зима');
} else if (monthNumber === '2'  || monthNumber === '02') {
  console.log('Сезон зима');
} else if (monthNumber === '3'  || monthNumber === '03') {
  console.log('Сезон весна');
} else if (monthNumber === '4'  || monthNumber === '04') {
  console.log('Сезон весна');
} else if (monthNumber === '5'  || monthNumber === '05') {
  console.log('Сезон весна');
} else if (monthNumber === '6'  || monthNumber === '06') {
  console.log('Сезон лето');
} else if (monthNumber === '7'  || monthNumber === '07') {
  console.log('Сезон лето');
} else if (monthNumber === '8'  || monthNumber === '08') {
  console.log('Сезон лето');
} else if (monthNumber === '9'  || monthNumber === '09') {
  console.log('Сезон осень');
} else if (monthNumber === '10') {
  console.log('Сезон осень');
} else if (monthNumber === '11') {
  console.log('Сезон осень');
} else if (monthNumber === '12') {
console.log('Сезон зима');
} else {
  console.log('Такого Сезона не существует!');
}

//Создайте адаптивную версию вашего сайта и добавьте эффекты наведения.
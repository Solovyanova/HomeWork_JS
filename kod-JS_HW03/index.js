//1
let password = 'Solovyanova';
let userInput = ( prompt ("Введите пароль"));
if (userInput === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

//2
let c = 0;
if (c > 0 && c < 10) {
console.log ('Верно');
} else {
console.log ('Неверно');
}

//3
let d = 101; 
let e = 50;
if (d > 100 || e > 100){
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
switch (monthNumber) {
    case 1:
	case 2:
	case 12:
	    alert ("Зима");
	    break;
	case 3:
	case 4:
	case 5:
	    alert ("Весна");
	    break;
	case 6:
	case 7:
	case 8:
	    alert ("Лето");
	    break;
	case 9:
	case 10:
	case 11:
	    alert ("Осень");
	    break;
}

//6 Создайте адаптивную версию вашего сайта и добавьте эффекты наведения.

//7
let number = Number (prompt('Пожалуйста, введите любое число'));
if (number %2 ==0) {
alert('Число четное');
}else {
alert ('Число нечетное');
}

//8
let clientOS = 0;
if (clientOS ==0) {
alert ('Установите версию приложения для iOS по ссылке');
} else {
alert ('Установите версию приложения для Android по ссылке')
}

//9
let yearofrelease = 2015
if (clientOS ==0 && yearofrelease >= 2015) {
alert ('Установите версию приложения для iOS по ссылке');
} else if (clientOS !=0 && yearofrelease >= 2015) {
alert ('Установите версию приложения для Android по ссылке');
} else if (clientOS ==0 && yearofrelease < 2015) {
alert ('Установите облегченную версию приложения для iOS по ссылке');
}else if (clientOS !=0 && yearofrelease < 2015) {
alert ('Установите облегченную версию приложения для Android по ссылке');
}
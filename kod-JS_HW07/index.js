//1
let str = "js";
str = str.toUpperCase();
console.log(str);

//2
function filterStrings(searchStart, startStr) {
    return array.filter((item) => item.toLowerCase().startsWith(strtStr.toLowerCase()));
}

searchStart = (['Кошка', 'Кит', 'Комар', 'Носорог'],  'ко');
searchStart = (['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
searchStart = (['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); 

//3
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

//4
let nums = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...nums));
console.log(Math.floor(...nums));

//5
function randomNumbers(n) {
    console.log (Math.floor(Math.random() * 10) + 1);
}

//6
function randomNumbers(n) {
    let result = [];
    for (let i = 0; i < n/2; i++) {
        result.push (Math.floor(Math.random() * n));
    }
    return result;
}

//7
function randomBetween (min, max) {
    return Math.random() * (max - min +1);
}

//8
console.log(new Date());

//9
let currentDate = new Date();
currentDate.setDate (currentDate.getDate() + 73);
console.log(currentDate);

//10
function formatDate (date) {
    let days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ];
    let months = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",
    ];
    return`Дата: ${date.getDate()} ${
        months [date.getMonth()]
    } ${date.getFullYear()
    } - это ${
        days[date.getDay()]
    }\nВремя: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds}`
}
console.log (formatDate(new Date()));
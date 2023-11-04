
function getSeason(number) {
    if (number == 1 || number == 2 || number == 12) {
        return 'Зима';
    } else if (number == 3 || number == 4 || number == 5) {
       return 'Весна';
    } else if (number == 6 || number == 7 || number == 8) {
        return 'Лето';
    }  else if (number == 9 || number == 10 || number == 11) {
        return 'Осень';
    } else {
        return 'Такого месяца нет:(';
    }
}
function getRemember(fruits) {
    let fruits = [
        "Яблоко",
        "Груша",
        "Дыня",
        "Виноград",
        "Персик",
        "Апельсин",
        "Мандарин",
    ];
    fruits = fruits.sort(() => Math.random() - 0.5);
    let firstGuess = prompt("Чему равнялся первый элемент массива?");
    let lastGuess = prompt ("Чему равнялся последний элемент массива?");
    
    if (firstGuess===fruits[0] && lastGuess===fruits[fruits.lenth - 1]) {
        alert("Поздравляем! Вы угадали оба слова!");
    } else if(firstGuess===fruits[0] || lastGuess===fruits[fruits.lenth - 1]) {
        alert("Вы были близки к победе!"); 
    } else {
        alert("Вы не угадали ни одного слова.");
    }
}

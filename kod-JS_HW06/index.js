//1
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log (arr[i]);
    if (arr[i] === 10) {
        break;
    }
}

//2
const figures = [1, 5, 4, 10, 0, 3];
const index = figures.indexOf(4);
console.log (index);

//3
const beens = [1, 3, 5, 10, 20];
const beens2 = beens.join(" ");
console.log (beens2);

//4
let rar = [];
for (let i = 0; i < 3; i++) {
    let inRar = [];
    for (let u = 0; u<3; u++) {
        inRar.push(1);
    }
    rar.push(inRar);
}
console.log (rar);

//5
const array = [1, 1, 1];
array.push(2, 2, 2);
console.log (array);

//6
const letter = [9, 8, 7, 'a', 6, 5];
letter.sort((a, b) => a - b).pop();
console.log (letter);

//7
const vbn = [9, 8, 7, 6, 5];
const questionVbn = Number(prompt("Угадай число)))"));
if (vbn.includies(questionVbn)) {
    alert ("Угадал");
} else {
    alert("Не угадал");
}
//выводит vbn.includies is not a function

//8
const  asd = "abcdef";
const reversedAsd = asd.split("").reverse().join("");
console.log (reversedAsd);

//9
const zxc = [
    [1, 2, 3,],
    [4, 5, 6]
];
const flatZxc = zxc.flat();
console.log(flatZxc);

//10
const qwe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i<qwe.length-1; i++) {
    console.log(qwe[i] + qwe[i + 1]);
}

//11
function getSquareNumber(qwe){
    return qwe.map((num) => num * num);
}

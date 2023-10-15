//1
let i = 0;
do {
console.log('Привет');
i++;
} while (i<2);
//или
for (let i = 0; i <= 2; i++) {
    console.log('Привет')
}

//2
for (let i =1; i <= 5; i++) {
    console.log(i)
}

//3
for (let i = 7; i <= 22; i++) {
    console.log(i)
}

//4
let obj = {
    Коля: "200",
    Вася: "300",
    Петя: "400",
};

for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов.`);
}
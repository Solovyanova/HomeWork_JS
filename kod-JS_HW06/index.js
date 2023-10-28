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
const bennns2 = beens.join(" ");
console.log (beens2);

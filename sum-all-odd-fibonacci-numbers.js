module.exports = function (num) {
// write your code here
let arr = [1, 1];
for (let i = 0; i < num; i++) {
let last = arr[arr.length - 1];
let lastButOne = arr[arr.length - 2];
let sum = last + lastButOne;

if(sum > num) {
break;
}
arr.push(sum); 
}
let filter = arr.filter((element) => element % 2 !== 0);
return filter.reduce((total, element) => total + element, 0);
} 

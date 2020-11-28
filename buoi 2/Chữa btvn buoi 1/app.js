/*
for ... of , for ... in : dùng trong mảng
for ... in : cả cho object 
forEach() : không thể break như 2 cái trên

let arr=[1,2,3,4,5,6] 
arr.forEach(function(element, index))
*/

function filterPrimes() {

}


let str = prompt("Nhập 1 dãy số");
let arr = str.split(',');
for(let i = 0; i <arr.length;i++) {
    arr[i] = Number(arr[i]); 
}

let numbers = arr.map(function(number) {
    return Number(number);
});
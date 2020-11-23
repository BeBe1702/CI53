var arr = [] ; 
var n = Number(prompt('Input the number of elements in the array'));

function isPrime(n) {
    if(n < 2) {
        return false ;
    }
    for(var i = 2; i <= Math.sqrt(n); i++ ){
        if(n%i === 0) {
            return false ;
        }
    }
return true ;
}

function primeArray(arr, n) {
    var primeArr = [] ;
    for(i = 0 ; i <n ; i++) {
        if(isPrime(arr[i]) == true){
            primeArr.push(arr[i]) ; 
        }
    }
    return primeArr ; 

}

for(var i = 0; i < n; i++){
    arr[i] = Number(prompt());
    
}

console.log(arr);
console.log(primeArray(arr , n));
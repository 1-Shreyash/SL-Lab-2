// function
// Write a function to reverse a given
// number. Use this function to check whether a number is a palindrome or not.
const prompt = require("prompt-sync")();
let num=0;
num = prompt("Enter the number: ")
function reverse(num2){
    let c1 = 0, rev=0;
    while(num2!=0){
        c1 *= 10
        c1 += num2%10;
        rev = c1;
        num2 = Math.floor(num2/10)
    }
    return rev;
}
console.log("REVERSE OF THE NUMBER IS : "+reverse(num))
if(reverse(num)==num){
    console.log("The number is a PALLIDROME")
}
else 
    console.log("The number is NOT a PALLIDROME")
// console.log(rev)
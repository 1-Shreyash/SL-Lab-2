
// String

// WAP to count the number of
// vowels in a paragraph.

const prompt = require("prompt-sync")();
let vowels = ['a','A','o','O','e','E','i','I','u','U']
let para = prompt("Enter Paragraph  :")
let count = 0;
vowels.forEach(element => {
    for(let i=0;i<para.length;i++){
        if(para[i]==element)
            count++;
    }
});
console.log("Number of vowels : "+count)
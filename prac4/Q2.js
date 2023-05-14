// Arrays
// and loops
// WAP to create an array(read
//     elements entered by user) which should allow only unique values, if there are
//     duplicates, then keep the first occurrence and remove the duplicates.
const prompt = require("prompt-sync")();
let arr = [], i;
console.log("Enter array elements :");
let num = prompt("Enter the number of elements :")
for(i = 0; i<num ;){
    data=prompt("Enter "+(i+1)+ "th element :");
    // console.log(data)
    let flag = 0;
    for(let j=0;j<i;j++){
        if(arr[j]==data){
            flag = 1;
            console.log("!!!Element already in array!!!")
            break;
        }
    }
    if(flag == 0){
        arr.push(data);
        i++;
    }
}
console.log("The array elements are: \n");
for(j= 0;j<=i;j++){
    console.log(arr[j])
}
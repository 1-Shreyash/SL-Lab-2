//part 1
function grade(mr){
    if(mr>=50 && mr<=65)
        gr = "C";
    else if(mr>=66 && mr<=80)
        gr = "B";
    else if(mr>=81)
        gr = "A";
    else if(mr>=91)
        gr = "A+";
    else
        gr = "!!!FAIL!!!"
    console.log(gr)
    return gr;
}
//part 2
ipt = document.getElementById("txtbox")
opt = document.getElementById("txtout")
var arr = new Set()
function outputMsg(){
    str = "["
    arr.forEach((element)=>{
        str+=element;
        str+=","
    })
    str+="]"
    opt.innerHTML = str;
}
function clk(){
    input1 = ipt.value;
    arr.add(input1);
    opt.innerHTML = "1";
    ipt.value = '';
    outputMsg()
}
// function takeArr(arr){
//     let arr2 = []
//     arr.forEach(element => {
//         if(element.count()){

//         }
//     });
// }
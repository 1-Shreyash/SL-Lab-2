let stars = document.querySelectorAll(".s")
let rem = document.getElementById("Remark")

let col = '#ffffff';
let counter = 4;
let colors = ['rgb(255, 0, 0)','rgb(255, 115, 0)','rgb(255, 170, 0)','rgb(0, 64, 255)','rgb(0, 149, 25)'];
let remark = ['Very Bad','Bad','Good','Very Good','Excellent']
rem.innerText = remark[4]
rem.style.color = colors[4]
stars.forEach((element,index) => {

    element.addEventListener("mouseenter",function(){
        for(let i=0;i<=index;i++){
            if(i>counter){
                stars[i].style.color = '#ffe100';
                rem.innerText = remark[i]
                rem.style.color = colors[i]
            }
        }
    })
    element.addEventListener("mouseleave",function(){
        for(let i=0;i<5;i++){
            if(i>counter){
                stars[i].style.color = col;
                rem.innerText = remark[counter];
                rem.style.color = colors[counter];
            }
        }
    })
    element.addEventListener("click", function(){
        counter = index;
        for(let i=0;i<5;i++){
            if(i<=counter){
                stars[i].style.color = '#ffe100';
            }
            else{
                stars[i].style.color = col;
            }
            rem.innerText = remark[counter];
            rem.style.color = colors[counter];
        }
    })
});
console.log(stars)

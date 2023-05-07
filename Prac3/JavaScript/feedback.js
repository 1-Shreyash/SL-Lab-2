let stars = document.querySelectorAll(".s")
let rem = document.getElementById("Remark")

let col = '#ffffff';
let counter = 4;
let colors = ['rgb(255, 0, 0)','rgb(255, 115, 0)','rgb(255, 170, 0)','rgb(0, 64, 255)','rgb(0, 149, 25)'];
let remark = ['Very Bad','Bad','Good','Very Good','Excellent']
rem.innerText = remark[4]
rem.style.color = colors[4]
stars.forEach((element,index) => {
    // element.addEventListener("mouseenter",function( event ) {   
    //     // highlight the mouseenter target
    //     stars[0].style.color = "purple";
    
    //     // reset the color after a short delay
    //     setTimeout(function() { 
    //       event.target.style.color = "";
    //     }, 500);
    //   }, false);
    // element.onmouseenter = function(){
    //     this.style.color = `rgb(255, 101, 19)`;
    // }
    // element.onmouseleave = function(){
    //     this.style.setProperty('color','#fff');
    // }
    element.addEventListener("mouseenter",function(){
        for(let i=0;i<=index;i++){
            if(i>counter){
                stars[i].style.color = '#ffe100';
                rem.innerText = remark[i]
                rem.style.color = colors[i]
            }
        }
        // alert("1")
    })
    element.addEventListener("mouseleave",function(){
        for(let i=0;i<5;i++){
            if(i>counter){
                stars[i].style.color = col;
                rem.innerText = remark[counter];
                rem.style.color = colors[counter];
            }
        }
        // for(let i=counter;i>=0;i--){
        //     stars[i].style.color = col;
        // }
        // for(let i=counter+1;i<=4;i++)
        //     stars[i].style.color = '#fff';
    })
    element.addEventListener("click", function(){
        counter = index;
        for(let i=0;i<5;i++){
            if(i<=counter){
                stars[i].style.color = '#ffe100';
                // rem.innerText = 
            }
            else{
                stars[i].style.color = col;
            }
            rem.innerText = remark[counter];
            rem.style.color = colors[counter];
        }
        // counter = index;
        // for(let i=index;i>=0;i--){
        //     stars[i].style.color = '#ffe100';
        // }
        // for(let i= couter+1; i<=4;i++){
        //     stars[i].style.color = '#fff';
        // }
        // col = '#ffe100';
    })
});
console.log(stars)
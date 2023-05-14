// WAP to output Grade “C” if
// entered marks are between 50-65, “B” for 66-80 and “A” for 80-90 and “A+” for
// above 90.
marks = 43;
if(marks<50)
    grade = "F";
if(marks>=50 && marks<60)
    grade = "C";
else if(marks>=60 && marks<80)
    grade = "B"
else if(marks>=80 && marks<90)
    grade = "A"
else if(marks>=90)
    grade = "A+"
console.log("Grade is: "+grade);
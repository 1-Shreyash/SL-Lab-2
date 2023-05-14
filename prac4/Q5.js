class Employee{
    constructor(name1, eid, salary, exp){
        this.name1 = name1 ;
        this.eid = eid ;
        this.salary = salary;
        this.exp = exp;
    }
    addIncrement(){
        if(this.exp>5){
            this.salary *= 1.2;
        }
        else{
            this.salary *= 1.15;
        }
        return this.salary;
    }
}
let e1 = new Employee("Smit",865445, 1000, 8);
console.log("Employee name: "+e1.name1)
e1.addIncrement();
console.log("Salary after increment :"+e1.salary+"\n");

let e2 = new Employee("Sahil",863345, 1000, 2);
console.log("Employee name: "+e2.name1)
e2.addIncrement();
console.log("Salary after increment :"+e2.salary);
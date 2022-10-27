class Person{
    constructor(name, race){
        this.greet=()=>{console.log("Hello")};
        this.name = name
        this.race = race;
    }
    nationality(citizen){
        this.citizen = citizen;
        return `${this.name} is ${this.citizen}`;
    }
}

class Employee extends Person{
    greet(){
        console.log("Hello employee");
    }
}

let nirav = new Person("Nirav", "human");
console.log("nirav is a " + nirav.race);
console.log(nirav.nationality("Indian"));

let e1 = new Employee();
e1.greet();
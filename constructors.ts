export { }
//constructors
class Student
{
    name: string;
    rno: number;
    branch: string;
    yop: number;
     

    constructor(name: string, rno: number, branch: string, yop: number) {
        this.name = name;
        this.rno = rno;
        this.branch = branch;
        this.yop = yop;
    }
    print() {
        console.log(this.name)
        console.log(this.rno)
        console.log(this.branch)
        console.log(this.yop)
    }



}
let s = new Student("swarna", 1, "eee", 2022); 
s.print()
let s1 = new Student("sandeep", 2, "civi", 2025); 
s1.print();



//inheritance is used to sharing of properties of sperclass to sub class
 

class Animal  //super class'
{
   place:string="zoo"
    noise()
{
        let an = "animal";
        console.log(an)
        console.log("animal is making noise")
        return an;
    }
    // private animalName: string;
    // get AnimalName() {
    //     return this.animalName;
    // }
    // set AnimalName(animalName)
    // {
    //     this.animalName = animalName;
    // }
    
}
class Tiger extends Animal
{
    liket()
    {
        let ti = "tiger and animal";
        console.log("sdfghjk")
      
    }
}
class Lion extends Animal{
    likel()
    {
        let li = "lion and animal";
        //console.log(an)
        console.log("dfghjfghj")
        
    }
}

let animal = new Animal()
animal.noise();


let tiger = new Tiger()
tiger.liket()
tiger.noise()
// console.log(tiger.AnimalName)
// console.log(tiger.place)
let lion = new Lion()
lion.likel()
console.log(lion.place)
lion.noise()



//
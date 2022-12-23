export{}
interface Animal {
    name: string;
    bread: string;
    details():void;
}
interface Zoo extends Animal{
    place: String;
    distance: number;
    detailszoo(): void;
}
class C1 implements Zoo{
    name: string;
 bread: string;
 place: String;
    distance: number;
    details(): void {
        console.log("detals :.............", this.name, this.bread);
        
    }
        
        detailszoo(): void {
          console.log("detalszoo :.............", this. place, this.  distance);
        }
}
let c = new C1()
c.bread = "fghj"
c.name="fghjk";
c.place = "dfghj"
c.distance = 789;
c.details()
c.detailszoo()




// //
// interface Another{
//     a: number;
//     b: number;
//     c: number;
//     sum: () => void;
//     sub:()=> number;
// }
// var operation: Another = {
//     a: 10,
//     b: 10,
//     c: 5,
//     sum: () => void {
        
//         console.log(operation.a + operation.b);
//     }
//     sub:() => number {
//    return(operation.a - operation.b);
//     }
    
// }



//generics with funcion


function f8<T>(h: T): T{
    return h;
}
console.log(f8<string>("jjj"))
console.log(f8<number>(45))
console.log(f8<boolean>(true))



// generics  with  clases

class A<T>
{
    m1<T>(x: T): T {
        return x;
   }
}
let a = new A()
console.log(a.m1<string>("fgh"))

console.log(a.m1<number>(45))
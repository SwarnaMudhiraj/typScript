export{}
let x: number = 10
let y: string = "string value"
let z: number = 60
console.log(x)
console.log(y)
console.log(z)

//to make reintialization with any data type any :datatype is used 
let k: any = 1;
//y = "siri"
console.log(k)
console.log(y)
console.log(k)
//arrays

let arr: string[] = ["swarna", "sandeep", "manoj", "fghj",]
let arr1: Array<string> = ["swarna", "sandeep", "manoj",]
let arr3: [string, number] = ["swarna", 10]
let arr4: any[] = [5, "ghjk", "ghjk", 4567]
let arr5 = [1, 2, 3, "ghj"]
console.log(arr5)
console.log(arr[0]);
console.log(arr1[2]);
console.log(arr3[1]);
console.log(arr4[1]);
// enum==object
enum obj { red = 4, blue = "sdf", yellow = 0 };
let red = obj.red;
let blue = obj.blue
let yellow = obj.yellow
console.log(red)
console.log(blue)
console.log(yellow)
console.log(obj)
//
//ways to convert datatypes
let s;
s = 20
//s="swarna"
console.log(s);
let s1 = (<string>s)
//s1="12"
console.log(typeof(s1))
let s2 = (<number>s).valueOf()
console.log(s2)
console.log(typeof (s2))
let s3 = (s as string)
console.log(typeof (s3))
s3 = "fghj";
console.log(s3)
console.log(typeof(s3))
//s3 = 18;

//// Functions
function f1() {
    console.log("ghjk")
    return 10;
}
 console.log(f1())

function f2():number{
    console.log("12345")
    //return "ghj"
    let num:number=16
    return 1
}
 console.log(f2());

function sum1(x: number, y: number):number{
    return x+y
}
console.log(sum1(10, 3));

function sum2(x: number = 10, y: number): number{
    return x + y;
}
console.log("sum 2:", sum2(x, 6))
 //optional
function opt(x: number, y: number, z?: number): number{
    if (typeof z !== "undefined")
    {
        return x + y + z;
        }
    return x + y ;
}
console.log(opt(10, 20))

//multiple arguments using (...)
function mul(...x:number[]) {
    //to make average
    let sumtion = 0;
    let noofArgs = 0
    for (let a = 0; a < x.length; a++)
    {
        sumtion = sumtion + x[a];
        noofArgs++;
    }
    let avg = sumtion / noofArgs;
    console.log(avg); 
    console.log(sumtion)
    console.log(noofArgs)
}
mul(10, 90, 1, 3, 4, 4,);
 
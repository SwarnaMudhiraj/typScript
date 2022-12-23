"use strict";
exports.__esModule = true;
var C1 = /** @class */ (function () {
    function C1() {
    }
    C1.prototype.details = function () {
        console.log("detals :.............", this.name, this.bread);
    };
    C1.prototype.detailszoo = function () {
        console.log("detalszoo :.............", this.place, this.distance);
    };
    return C1;
}());
var c = new C1();
c.bread = "fghj";
c.name = "fghjk";
c.place = "dfghj";
c.distance = 789;
c.details();
c.detailszoo();
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
function f8(h) {
    return h;
}
console.log(f8("jjj"));
console.log(f8(45));
console.log(f8(true));
// generics  with  clases
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.m1 = function (x) {
        return x;
    };
    return A;
}());
var a = new A();
console.log(a.m1("fgh"));
console.log(a.m1(45));

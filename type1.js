"use strict";
exports.__esModule = true;
var x = 10;
var y = "string value";
var z = 60;
console.log(x);
console.log(y);
console.log(z);
//to make reintialization with any data type any :datatype is used 
var k = 1;
//y = "siri"
console.log(k);
console.log(y);
console.log(k);
//arrays
var arr = ["swarna", "sandeep", "manoj", "fghj",];
var arr1 = ["swarna", "sandeep", "manoj",];
var arr3 = ["swarna", 10];
var arr4 = [5, "ghjk", "ghjk", 4567];
var arr5 = [1, 2, 3, "ghj"];
console.log(arr5);
console.log(arr[0]);
console.log(arr1[2]);
console.log(arr3[1]);
console.log(arr4[1]);
// enum==object
var obj;
(function (obj) {
    obj[obj["red"] = 4] = "red";
    obj["blue"] = "sdf";
    obj[obj["yellow"] = 0] = "yellow";
})(obj || (obj = {}));
;
var red = obj.red;
var blue = obj.blue;
var yellow = obj.yellow;
console.log(red);
console.log(blue);
console.log(yellow);
console.log(obj);
//
//ways to convert datatypes
var s;
s = 20;
//s="swarna"
console.log(s);
var s1 = s;
//s1="12"
console.log(typeof (s1));
var s2 = s.valueOf();
console.log(s2);
console.log(typeof (s2));
var s3 = s;
console.log(typeof (s3));
s3 = "fghj";
console.log(s3);
console.log(typeof (s3));
//s3 = 18;
//// Functions
function f1() {
    console.log("ghjk");
    return 10;
}
console.log(f1());
function f2() {
    console.log("12345");
    //return "ghj"
    var num = 16;
    return 1;
}
console.log(f2());
function sum1(x, y) {
    return x + y;
}
console.log(sum1(10, 3));
function sum2(x, y) {
    if (x === void 0) { x = 10; }
    return x + y;
}
console.log("sum 2:", sum2(x, 6));
//optional
function opt(x, y, z) {
    if (typeof z !== "undefined") {
        return x + y + z;
    }
    return x + y;
}
console.log(opt(10, 20));
//multiple arguments using (...)
function mul() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    //to make average
    var sumtion = 0;
    var noofArgs = 0;
    for (var a = 0; a < x.length; a++) {
        sumtion = sumtion + x[a];
        noofArgs++;
    }
    var avg = sumtion / noofArgs;
    console.log(avg);
    console.log(sumtion);
    console.log(noofArgs);
}
mul(10, 90, 1, 3, 4, 4);

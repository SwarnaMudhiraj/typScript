"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//constructors
var Student = /** @class */ (function () {
    function Student(name, rno, branch, yop) {
        this.name = name;
        this.rno = rno;
        this.branch = branch;
        this.yop = yop;
    }
    Student.prototype.print = function () {
        console.log(this.name);
        console.log(this.rno);
        console.log(this.branch);
        console.log(this.yop);
    };
    return Student;
}());
var s = new Student("swarna", 1, "eee", 2022);
s.print();
var s1 = new Student("sandeep", 2, "civi", 2025);
s1.print();
//inheritance is used to sharing of properties of sperclass to sub class
var Animal //super class'
 = /** @class */ (function () {
    function Animal() {
        this.place = "zoo";
        // private animalName: string;
        // get AnimalName() {
        //     return this.animalName;
        // }
        // set AnimalName(animalName)
        // {
        //     this.animalName = animalName;
        // }
    }
    Animal.prototype.noise = function () {
        var an = "animal";
        console.log(an);
        console.log("animal is making noise");
        return an;
    };
    return Animal;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tiger.prototype.liket = function () {
        var ti = "tiger and animal";
        console.log("sdfghjk");
    };
    return Tiger;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lion.prototype.likel = function () {
        var li = "lion and animal";
        //console.log(an)
        console.log("dfghjfghj");
    };
    return Lion;
}(Animal));
var animal = new Animal();
animal.noise();
var tiger = new Tiger();
tiger.liket();
tiger.noise();
// console.log(tiger.AnimalName)
// console.log(tiger.place)
var lion = new Lion();
lion.likel();
console.log(lion.place);
lion.noise();
//

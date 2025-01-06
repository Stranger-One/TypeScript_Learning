// Generics
// Generics Function
// - We can define the type of a parameter in a function at the time of calling of that function
function display(a) {
    console.log(a, typeof (a));
}
function abcd(obj) {
    console.log(obj);
}
// abcd({name: "mark", age: 23, key: "jahsfaue"})
// Generics Classes
var BottleMaker = /** @class */ (function () {
    function BottleMaker(key) {
        this.key = key;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("hey");
var b2 = new BottleMaker(12);
// Type Assertion / Type casting
// Type Assertion
var a;
// (a as string)
// (<string>a)
// Type casting
var b = Number("12");
// Type of b ==>> number
// console.log(typeof b);
// Non-null assertion operator
var nn;
nn = 12;
// nn!.
// Type Guards
function guard(a) {
    if (typeof a === "string") { // type narrowing
        return "string";
    }
    else if (typeof a === "number") {
        return "number";
    }
    else {
        throw new Error("kuch bhi");
    }
}
// console.log(guard(12))
// console.log(guard("12"))
// console.log(guard(true))
// ///////
var TvRemote = /** @class */ (function () {
    function TvRemote() {
    }
    TvRemote.prototype.switchOfTv = function () {
        console.log("Switching off tv ...");
    };
    return TvRemote;
}());
var CarRemote = /** @class */ (function () {
    function CarRemote() {
    }
    CarRemote.prototype.switchOfCar = function () {
        console.log("Switching off car ...");
    };
    return CarRemote;
}());
var tv1 = new TvRemote();
var car1 = new CarRemote();
function switchOff(device) {
    if (device instanceof TvRemote) {
        device.switchOfTv();
    }
    else if (device instanceof CarRemote) {
        device.switchOfCar();
    }
    else {
    }
}
// switchOff(tv1)
// switchOff(car1)

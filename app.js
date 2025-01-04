var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Functions 
function abcd(name, age, cb) {
    cb();
}
abcd("max", 20, function () {
    console.log("hey max line 7");
});
function abcd2(name, model, cb) {
    cb("hello");
}
abcd2("poco", 12, function (arg) {
    console.log(arg);
});
// optional and default parameters
// optional
function details(name, age, gender) {
    console.log(name, age, gender);
}
details("kuch v", 7, "male");
details("aur kuch", 67);
// default 
function details2(name, age, gender) {
    if (gender === void 0) { gender = "dont know"; }
    console.log(name, age, gender);
}
details2("kuch v", 7, "male");
details2("aur kuch", 67);
// rest/Spread
// rest ...
function sum() {
    var val = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        val[_i] = arguments[_i];
    }
    console.log(val);
}
sum(1, 2, 2, 3, 4, 5, 6, 78);
function cities() {
    var val = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        val[_i] = arguments[_i];
    }
    console.log(val);
}
cities("sambalpur", "bhubaneswar");
// spread
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
var arr2 = [5, 6, 8, 9, 0];
var arr3 = __spreadArray([], arr1, true);
var arr4 = __spreadArray(__spreadArray([], arr1, true), arr2, true);
function add(a, b) {
    return a + b;
}
// Usage examples
console.log(add(5, 10)); // Returns 15
console.log(add("Hello ", "World")); // Returns "Hello World"
function display(value, isActive) {
    if (typeof value === "number") {
        console.log("Number: ".concat(value, ", Active: ").concat(isActive));
    }
    else {
        console.log("String: ".concat(value));
    }
}
// Usage examples
display("Test"); // Calls first overload
display(42, true); // Calls second overload
// Generics

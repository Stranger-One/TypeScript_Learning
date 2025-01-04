var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user1 = new User('John', 30);
user1.name = 'Doe';
console.log(user1.name);
//  getter and setter
var User1 = /** @class */ (function () {
    function User1() {
        this._name = '';
        this._age = 0;
    }
    Object.defineProperty(User1.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User1.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return User1;
}());
var user2 = new User1();
user2.name = 'John';
user2.age = 30;
console.log(user2.name, user2.age);
// Static properties/member
// - by using static keyword, we can define a property or method that belongs to the class itself, not the instance of the class.
// - static properties are shared among all instances of the class.
// - static properties are accessed using the class name.
// - static properties are defined using the static keyword.
// - static properties are not available in the instance of the class.
var User3 = /** @class */ (function () {
    function User3() {
    }
    User3.count = 0;
    return User3;
}());
console.log(User3.count);

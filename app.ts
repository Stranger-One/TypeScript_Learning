class User{
    constructor(public name: string, public age: number){  }
}



const user1 = new User('John', 30);
user1.name = 'Doe';
console.log(user1.name)

//  getter and setter

class User1{
    private _name: string = '';
    private _age: number = 0;

    get name(){
        return this._name;
    }

    set name(value: string){
        this._name = value;
    }

    get age(){
        return this._age;
    }

    set age(value: number){
        this._age = value;
    }
}

const user2 = new User1();
user2.name = 'John';
user2.age = 30;
console.log(user2.name, user2.age)

// Static properties/member
// - by using static keyword, we can define a property or method that belongs to the class itself, not the instance of the class.
// - static properties are shared among all instances of the class.
// - static properties are accessed using the class name.
// - static properties are defined using the static keyword.
// - static properties are not available in the instance of the class.

class User3{
    static count: number = 0;
    
}

console.log(User3.count);


 

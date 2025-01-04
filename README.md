# Typescript

## Basic Commands
Compile typescript file:
```bash
> tsc app.js
``` 

Create `tsconfig.json`:
```bash
> tsc --init
``` 

Start compilation in watch mode:
```bash
> tsc --watch
```

## Datatypes
- Number
- String
- Boolean
- Arrays
- Tuples
- Enums
- Any, Unknown, Void, Null, Undefine, Never

## Primitive And Reference
- Primitives: number, string, boolean
- Reference: Arrays [ ], Objects { }, Functions ( )


### Array:
Arrays can hold multiple values of same or different types:
```typescript
// Flexible array with mixed types
let arr = [1, 2, 3, 'str', {name: 'string'}]

// Typed array
let numbers: number[] = [1, 2, 3];
```

### Tuple: 
- Define positions with their type
- Fixed length
```typescript
// Strict typed fixed-length array
let arr: [number, string] = [12, "typeScript"]

// Example with multiple types
let userStatus: [string, boolean, number] = ["active", true, 1];
```

### Enums - Enumerations
- Define Key-value pairs
```typescript
// String enum example
enum StatusCodes {
    NOTFOUND = "Status code is 404",
    SERVER_ERROR = "Status code is 500"
}

// Numeric enum example
enum Role {
    ADMIN = 1,
    USER = 2,
    GUEST = 3
}
```

### Any, Unknown, Void, Null, Undefine, Never
```typescript
let a:number; // Type - number : assignable only number value

// any
let b; // Type - any : assignable any type of value

// unknown
let c: unknown;
c = 12;
c = "string"

if(typeof c === 'string') c.toUpperCase()

// void
function abcd():void {
    console.log("void")
}
function returnNumber():number {
    return 12
}
function returnString():string {
    return "stirng"
}

// null
let expNull: string | null;
expNull = "string" // ✅
expNull = null // ✅
expNull = 12 // ❌

//  undefine
let un: undefined;

//  never
function loop():never {
    while(true) console.log("loop")
}
loop()
console.log("after loop")
```
## Type Inference
- Type inference: TypeScript automatically identify the type of variable is call `Type Inference`
```typescript
// Type inference examples
let a = 12;                    // Inferred as number
let text = "Hello";           // Inferred as string
let items = [1, 2, 3];       // Inferred as number[]
```
    
- Type annotations: if any variable defined with type, that is called `Type Annotations`
```typescript
// Type annotations examples
let b:number = 12;
let c: null | string | number;

function abcde(a: number, b:string): void{
    console.log(`number is ${a} and string is ${b}`)
}
```

## Interfaces and Type Aliases
### Interfaces
- This is a shape of an object
- Interface define the properties types of an object
```typescript
// Basic interface
interface User {
    username: string,
    email: string,
    phone: number,
    gender?: string // Optional property
}

// Interface usage
function getUser(obj: User) {
    console.log(obj)
}

// Valid examples
getUser({
    username: "raj",
    email: "raj@gmail.com",
    phone: 83482045,
    gender: "male"
})
getUser({username: "raj", email: "raj@gmail.com", phone: 83482045})
```

### Extending Interfaces
- An Interface have all properties of another interface
```typescript
interface User{
    username: string,
    email: string,
    phone: number,
    gender?: string // ? make the property optional
}

interface Admin extends User {
    adminId: string
}
```
- Here Admin have all properties of User
- More than one Interfaces of same name are merged
```typescript
interface User{
    username: string,
    email: string,
    
}
interface User{
    phone: number,
    gender?: string
}
```
### Type Aliases
- Create our own type 
```typescript
type mytype = string | number | null;

let a: mytype;
```

### Type Intersection
```typescript
// Basic types
type User = {
    name: string,
    email: string
}

// Combining types
type Admin = User & {
    getDetails(user: string): void,
    isAdmin: boolean
}

// Usage example
const admin: Admin = {
    name: "John",
    email: "john@admin.com",
    isAdmin: true,
    getDetails(user) {
        console.log(`Getting details for ${user}`);
    }
}
```

## Classes and Objects
Classes provide a way to create blueprints for objects with properties and methods.

### Basic Class Example
```typescript
class Laptop {
    constructor(public name: string, public price: number, public quantity: number){}

    totalCost(): number {
        return this.price * this.quantity;
    }
}
```

### Access Modifiers
TypeScript supports three access modifiers:

1. **public** (default)
   - Accessible from anywhere
   - No access restrictions
   ```typescript
   class BotelMaker {
       public name: string;
       public price: number;
       public quantity: number;
   }
   ```

2. **private**
   - Only accessible within the class
   - Properties can't be accessed from outside the class
   ```typescript
   class BotelMaker {
       private name: string;
       private price: number;
       private quantity: number;
   }
   ```

3. **protected**
   - Accessible within the class and its subclasses
   - Allows inheritance while maintaining encapsulation
   ```typescript
   class BotelMaker {
       protected name: string;
       protected price: number;
       protected quantity: number;
   }

   class BotelMaker2 extends BotelMaker {
       show(): void {
           console.log(this.name); // Accessible because name is protected
       }
   }
   ```

### Readonly Properties
- Prevents modification of class properties after initialization
- Properties marked as readonly can only be set once during construction
```typescript
class User {
    constructor(public readonly name: string) {}
}

const user = new User('Max');
// user.name = 'Manu'; // Error: Cannot assign to 'name' because it is a read-only property.
```

### Optional Parameters
- Parameters marked with ? are optional
- Optional parameters must be at the end of the parameter list
```typescript
class User {
    constructor(public name: string, public age?: number) {}
}

const user1 = new User('Max', 20);    // With age
const user2 = new User('chacha');     // Without age
```

### Parameter Properties
- Shorthand syntax for creating and initializing class properties
- Combines parameter declaration and property initialization
```typescript
class User {
    constructor(public name: string, private age: number) {}
}

// Equivalent to:
class User {
    public name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
```

### Getters and Setters
- Control access to class properties
- Encapsulate property access and modification
```typescript
class User {
    private _name: string = '';
    private _age: number = 0;

    get name() {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}

const user = new User();
user.name = 'John';     // Uses setter
console.log(user.name); // Uses getter
```

### Static Members
- Belong to the class itself, not instances
- Shared among all instances of the class
- Accessed using the class name
- Defined using the `static` keyword
```typescript
class User {
    static count: number = 0;
}

console.log(User.count); // Access static property directly from class
```

## Functions
TypeScript supports various function features and patterns.

### Callback Functions
Functions that accept other functions as parameters:
```typescript
function abcd(name: string, age: number, cb: () => void) {
    cb();
}

// Usage with arrow function callback
abcd("max", 20, () => {
    console.log("hey max");
});

// Callback with parameters
function abcd2(name: string, model: number, cb: (arg: string) => void) {
    cb("hello");
}
```

### Optional and Default Parameters
Two ways to handle optional parameters:

1. Optional Parameters (?)
```typescript
function details(name: string, age: number, gender?: string) {
    console.log(name, age, gender);
}

details("kuch v", 7, "male");  // All parameters
details("aur kuch", 67);       // Without optional parameter
```

2. Default Parameters
```typescript
function details2(name: string, age: number, gender: string = "dont know") {
    console.log(name, age, gender);
}

details2("kuch v", 7, "male");  // Override default
details2("aur kuch", 67);       // Use default
```

### Rest and Spread Operators
1. Rest Parameters
```typescript
function sum(...val: number[]) {
    console.log(val);
}
sum(1, 2, 2, 3, 4, 5, 6, 78);

function cities(...val: string[]) {
    console.log(val);
}
cities("sambalpur", "bhubaneswar");
```

2. Spread Operator
```typescript
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];

const arr3 = [...arr1];           // Copy array
const arr4 = [...arr1, ...arr2];  // Merge arrays
```

### Function Overloading
Define multiple function signatures for different parameter types:

```typescript
// Overloads with same parameter count
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

// Overloads with different parameter count
function display(value: string): void;
function display(value: number, isActive: boolean): void;
function display(value: any, isActive?: boolean): void {
    if (typeof value === "number") {
        console.log(`Number: ${value}, Active: ${isActive}`);
    } else {
        console.log(`String: ${value}`);
    }
}
```




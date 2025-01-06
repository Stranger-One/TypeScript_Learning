// Generics
// Generics Function

// - We can define the type of a parameter in a function at the time of calling of that function

function display<T>(a: T){
    console.log(a, typeof(a));
}

// display<string>("h")
// display<number>(12)
// display(true) 

// Generics Interfaces

interface kuchBhi <T> {
    name: string,
    age: number,
    key: T
}

function abcd(obj: kuchBhi<string>){
    console.log(obj);
    
}
// abcd({name: "mark", age: 23, key: "jahsfaue"})


// Generics Classes

class BottleMaker <T> {
    constructor(public key: T){}
}

const b1 = new BottleMaker<string>("hey")
const b2 = new BottleMaker(12)


// Type Assertion / Type casting
// Type Assertion
let a: any;

// (a as string)
// (<string>a)


// Type casting
let b = Number("12")
// Type of b ==>> number
// console.log(typeof b);

// Non-null assertion operator
let nn: null | undefined | number;

nn=12

// nn!.


// Type Guards
function guard(a:string|number|any){
    if(typeof a === "string"){ // type narrowing
        return "string"
    } else if (typeof a === "number"){
        return "number"
    } else {
        throw new Error("kuch bhi")
    }
}

// console.log(guard(12))
// console.log(guard("12"))
// console.log(guard(true))

// ///////
class TvRemote{
    switchOfTv(){
        console.log("Switching off tv ...");
    }
}

class CarRemote{
    switchOfCar(){
        console.log("Switching off car ...");
    }
}

const tv1 = new TvRemote()
const car1 = new CarRemote()

function switchOff(device: TvRemote | CarRemote){
    if(device instanceof TvRemote){
        device.switchOfTv()
    } else if (device instanceof CarRemote){
        device.switchOfCar()
    } else {

    }
}

// switchOff(tv1)
// switchOff(car1)
// Functions 
function abcd(name:string, age:number, cb: ()=>void){
    cb()
}

abcd("max", 20, ()=>{
    console.log("hey max line 7");
})


function abcd2(name:string, model: number, cb: (arg:string)=>void){
    cb("hello")
}

abcd2("poco", 12, (arg:string)=>{
    console.log(arg); 
} )


// optional and default parameters
// optional
function details(name: string, age: number, gender?:string){
    console.log(name, age, gender);
}

details("kuch v", 7, "male")
details("aur kuch", 67)

// default 
function details2(name: string, age: number, gender:string = "dont know"){
    console.log(name, age, gender);
}

details2("kuch v", 7, "male")
details2("aur kuch", 67)


// rest/Spread
// rest ...

function sum(...val: number[]){
    console.log(val);
    
}
sum(1,2,2,3,4,5,6,78)

function cities(...val: string[]){
    console.log(val)
}
cities("sambalpur", "bhubaneswar")

// spread

const arr1 = [1,2,3,4,5,6,7,8]
const arr2 = [5,6,8,9,0]

const arr3 = [...arr1]
const arr4 = [...arr1, ...arr2]


// function overload
// Function overloading with different parameter types but same number of parameter
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

// Usage examples
console.log(add(5, 10));        // Returns 15
console.log(add("Hello ", "World")); // Returns "Hello World"

// Another example with different number of parameters
function display(value: string): void;
function display(value: number, isActive: boolean): void;
function display(value: any, isActive?: boolean): void {
    if (typeof value === "number") {
        console.log(`Number: ${value}, Active: ${isActive}`);
    } else {
        console.log(`String: ${value}`);
    }
}

// Usage examples
display("Test");           // Calls first overload
display(42, true);        // Calls second overload

// Generics

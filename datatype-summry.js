// Primitive 
//  Datatype : String, Symbol, Number, Null, Boolearn, BigInt, Undefined, 
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId);

const bigNumber = 99990726458930n

//Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"];
let myObj = {
    name: "dipak",
    age: 21,
}

const myFunction = function () {
    console.log("hellow world");

}
()
console.log(typeof myObj);






//**********************************************************//

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Dpac DC"
let anothername = myYoutubename
anothername = "Dpacc Vlogs"
// console.log(myYoutubename);
// console.log(anothername);


let userOne = {
    username: " Dipak ",
    upi: "user@ypl"
}

let userTow = userOne

let userNew = userTow



userTow.username = "Nikhil",
    userTow.upi = "nikhil@boi",

    userNew.username = "Sahil",
    userNew.upi = "sahil@oxix"

//     console.log(userNew.username);
// console.log(userNew.upi);






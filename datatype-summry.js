// Primitive 
// type : String , number, boolearn,null, undefined, symbol,bigInt
  const score = 100
  const scoreValue =100.3
   const isLoggedIn =false
   const outsideTemp =null 
   let userEmail;

   const id =Symbol ("123")
   const anotherId = Symbol("123")
    // console.log(id === anotherId);


//Reference (no Primitive)
// Array, Objects, Functions

const heros =["shatiman" , "naagraj", "doga"];
let myOBJ ={
    name: "dipak",
    age:21,
}

// const myFunction =function(){
//     console.log("hellow world");
    
// }


//********************************************************* */

// stack ( Primitive), Heap(Non-Primitive)

let myYoutubename ="dpakkk"

let anothername = myYoutubename

anothername = "chai or code"
console.log(myYoutubename);
console.log(anothername);



let userOne = { 
    email: "user@gcom",
    upi:"user@ypl"
    
    
}

let userTow = userOne

userTow.email="diapk@gcom"
console.log(userOne.email);
console.log(userTow.email);






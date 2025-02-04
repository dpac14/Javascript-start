function sayMyName() {
    console.log("D");
    console.log("I");
    console.log("P");
    console.log("A");
    console.log("K");

}
// sayMyName() exicutive


// 


function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2

}
const result = addTwoNumbers(3, 4)
// console.log("Score: ", result);


function loginUserMassage(username = "SaM") {
    if (username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} Just Logged In `
}
// console.log(loginUserMassage("Dipak"));
// console.log(loginUserMassage());

function calculatecartPrice(...num1) {
    return num1

}

// console.log(calculatecartPrice(200, 300, 400));

const user = {
    username: "Dipak",
    price: 199
}

function handleObject(anyobject) {
    console.log(`User Name is ${anyobject.username} and Price is ${anyobject.price}`);

}

// handleObject(user)
handleObject({
    username:"Sam",
    price: 499
})
  
const myNewArray =[200, 300, 400, 600]

function returnSecondValue(...getArray){
return getArray[0]
}
console.log(returnSecondValue(myNewArray));


function sayMyName() {
  console.log("D");
  console.log("I");
  console.log("P");
  console.log("A");
  console.log("C");

}
// sayMyName()


// function addTwoNumbers(number1, number2){

//   console.log(number1 + number2);

// }
// // addTwoNumbers(3, "4")


function addTwoNumbers(number1, number2) {

  // let result = number1 + number2
  // return result 

  return number1 + number2

}

const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);

function loginUserMessage(username = "Uesre Not ") {
  if (!username) {
    console.log("please enter a username");
    return
  }
  return `${username} just logged in `
}
// console.log(loginUserMessage("dipak"));
console.log(loginUserMessage());
// Signleton

// Object literals

const mySym = Symbol("key1")

const JsUser = {
  name: "Dipak DC",
  age: 18,
  [mySym]: "mykey1",
  location: "Nagpur",
  email: "dipac@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]


}

//  console.log(JsUser.email);
//  console.log(JsUser["name"]);
//  console.log(typeof JsUser[mySym]);
JsUser.email = "dipac@chatgpt.com"
//   Object.freeze(JsUser)
JsUser.email = "dipac@microsoft.com"
//   console.log(JsUser);



JsUser.greeting = function () {
  console.log("Hellow JS user");

}
JsUser.greetingTwo = function () {
  console.log(`Hellow JS user, ${this.name}`);

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

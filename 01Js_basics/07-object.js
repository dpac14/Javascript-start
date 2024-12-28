// objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "dpak",
    mySym:"mykey1",
    age: 22,
    location: "Nagpur",
    email: "dpakchute11@gmail.com",
    isLoggedIn: "false",
}
console.log(JsUser.email);
console.log(JsUser["isLoggedIn"]);


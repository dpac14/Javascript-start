// const tinderuser = new Object{\}
const tinderUser = {}
tinderUser.id = "1234asd"
tinderUser.name = "dpac"
tinderUser.isLoggedIn = false
//  console.log(tinderUser);


const newUser = {
    email: "someone@gmail.com",
    fullname: {
        username: {
            firstname: "dpac",
            lastname: "chute",
        }
    }
}
// console.log(newUser.fullname.username.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj4 = { 5: "e", 6: "f" }

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1,obj2)
const obj3 = { ...obj1, ...obj2, }
// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('idlpggedin'));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
    coursenmae:"JS In Hindi",
    price:"999",
    courseInstructor:"dipak",
}
//  course.courseInstructor
const {courseInstructor: instcructor} = course
//  console.log(course.courseInstructor);
 console.log(instcructor);
 

 {
    name:"dipak"
    coursename:"js in hindi"
    price:"free"
 }
//singleton using constructor
//const tinderUser = new Object() //similar to  (Singleton Object)
const tinderUser ={}  //(Non-Singleton Object)

tinderUser.id = "182"
tinderUser.name = "Dhruv"
tinderUser.isLoggedIn = false
//console.log(tinderUser);


const regularUser = {    //Nested Object possible
    email : "abc@xyz.com",
    fullname : {
        user_name : {
            firstname : "Dhruv",
            lastname : "Rohatgi"
        }
    }
}

//console.log(regularUser.fullname.user_name)

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

//const obj3 = {obj1,obj2}   //not a correct way to join
//const obj3 = Object.assign({} ,obj1,obj2)  //{} taken keeping in mind extra object or spaces occupied

//Object.assign(target,source)
const obj3 = {...obj1,...obj2}   //Spread Operator for joining of two objects (latest so used often)
//console.log(obj3);



//When value arrives from database
const users = [
    {
        id: "1",
        email: "h@gmail.com"
    },
    {

    },
    {

    }
]

users[1].email //to access database elements
console.log(tinderUser);
console.log(Object.keys(tinderUser));   //datatype array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "Javascript",
    price : "999",
    instructor : "kanu"
}

//course.instructor
const {instructor : teacher} = course   //destructure of object
console.log(teacher);


//Intro to JSON API
/*{
    "name": "Dhruv",    //keys and values both are in strings
    "course": "HUNT4Edu",
    "price": "200"
}*/

[
    {},
    {},
    {}
]
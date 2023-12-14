// for of

/*["","",""]
[{},{},{}]*/

const arr=[1,2,3,4,5]

for (const num of arr) {                //here object is not of js object
    //console.log(num);
}

const greetings = "Hello world"
for (const greet of greetings) {
    //console.log(greet);
    
}

//Maps  (unique values) have key-value pair


const map = new Map()
map.set("IN","India");
map.set("US","America");
map.set("UK","United Kingdom");
map.set("IN","India");

//console.log(map);

/*for (const key of map) {
    console.log(key)
}*/

//Array Destructure

for (const [key,value] of map) {
    console.log(key, ':-', value);
    
}

const myObj = {
    game1 : 'NFS',
    game2 : 'FallGuys'
}

for (const [key,value] of myObj) {   //through for..of object is not iteratable
    console.log(key, ':-', value);
    
}
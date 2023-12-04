let myDate = new Date()
/*console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString);*/

console.log(typeof myDate);

let mycreatedDate = new Date(2023,0,23,5,3)  //array format 0 indexed
console.log(mycreatedDate.toDateString());
console.log(mycreatedDate.toLocaleString());

//let newcreateddate = new Date("2023-12-04")  //dd/mm/yyyy format 1 indexed
let newcreateddate = new Date("12-04-2023")   //Indian standard format mm/date/yyyy
console.log(newcreateddate.toDateString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);  //millisecond value
console.log(mycreatedDate.getTime());  //compared with time stamp and used in quizzes etc to declare winners

//if we want the stamp in second, need to memorize it that we divide it by 1000
console.log(Math.floor(Date.now()/1000));

console.log(myDate.getDate());
console.log(myDate.getMonth()+1);  //to reduce confusion

//`${myDate.getDate()} and the time`

myDate.toLocaleString('default', {weekday:"long"})  //customization of date
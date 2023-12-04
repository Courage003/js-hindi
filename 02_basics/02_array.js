const marvel_heroes= ["thor","ironman","spiderman"]
const dc_heroes= ["superman","flash","batman"]

//marvel_heroes.push(dc_heroes)  //not merged but create array into array
//console.log(marvel_heroes[3][1]); //not a good practice to traverse

//const allheroes = marvel_heroes.concat(dc_heroes) //proper joining

//console.log(allheroes);


//people most often use spread operator in place of concat
const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]] //if we are stuck in such complex situations
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);




//Used in Data Scraping
console.log(Array.isArray("Dhruv"))
console.log(Array.from("Dhruv"))  //builds into array
console.log(Array.from({name:"Dhruv"}))  //returns empty array (interesting case, since keys are not mentioned)

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))



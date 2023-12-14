const myObj = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    py: 'Python'
}

for (const key in myObj) {
   console.log(`${key} shortcut is for languages ${myObj[key]}`);
}

const arr = ["js","py","cpp","rb","swift"]
for (const key in arr) {                  //it mainly refers to the key values unlike for..of
   console.log(`${key} is the index for value ${arr[key]}`)
}

const map = new Map()
map.set("IN","India");
map.set("US","America");
map.set("UK","United Kingdom");
map.set("IN","India");

for (const key in map) {
    console.log(map[key])      //doesn't key any value as for...in is non-iteratable for map
   
}


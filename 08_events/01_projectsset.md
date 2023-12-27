# Unlimited Colors

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-6cwcij?file=2-BMICalculator%2Findex.html,6-unlimitedColors%2Fchaiaurcode.js)


# Solution code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
  </head>
  <body style="background-color: #212121; color: #fff">
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>

    <h1>Start should change the Background color every second</h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <script src="chaiaurcode.js"></script>
  </body>
</html>


```


```javascript
//Generating random colours

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 16);
  }
  return color;
};

//Better code practice
let intervalId;
function startChangingcolor() {
  if(!intervalId){
    intervalId=setInterval(changeColor,1000)
  }

  function changeColor(){
    document.body.style.backgroundColor=randomColor()
  }
}
function stopChangingcolor() {
  clearInterval(intervalId)
  intervalId=null;
}
document.querySelector('#start').addEventListener('click', startChangingcolor);
document.querySelector('#stop').addEventListener('click', stopChangingcolor);



```
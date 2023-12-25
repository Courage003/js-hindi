# Digital Clock

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-6cwcij?file=2-BMICalculator%2Findex.html,3-DigitalClock%2Fchaiaurcode.js)


# Solution code

```javascript
const clock = document.getElementById('clock');
//to upadte it in script every second
setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```
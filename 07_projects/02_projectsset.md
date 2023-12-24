# Projects related to DOM in Javascript

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-6cwcij?file=2-BMICalculator%2Findex.html,2-BMICalculator%2Fchaiaurcode.js)


# Solution code

```javascript

const form= document.querySelector('form')

form.addEventListener('submit',function(e){

  e.preventDefault()
  const height= parseInt(document.querySelector('#height').value)

  const weight=parseInt(document.querySelector('#weight').value)

  const results= document.querySelector('#results')

  if(height==='' || height<0 || isNaN(height)){
    results.innerHTML= `Please enter proper height ${height}`
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML= `Please enter proper weight ${weight}`
  }
  else{
    const bmi= (weight/((height*height)/10000)).toFixed(2)
    results.innerHTML= `<span>${bmi}<\span>`
  }
})


```
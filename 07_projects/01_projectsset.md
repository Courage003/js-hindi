# Projects related to DOM in Javascript

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-6cwcij?file=1-colorChanger%2Findex.html,1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Fstyle.css)


# Solution code

```javascript

console.log("Dhruv")

//selecting all buttons
const buttons=document.querySelectorAll('.button')
//selecting body
const body = document.querySelector("body")

buttons.forEach((button)=>{
  console.log(button);

  button.addEventListener('click',function(e){
      console.log(e);
      console.log(e.target);

      if(e.target.id==='yellow'){
        body.style.backgroundColor=e.target.id;
      }
      if(e.target.id==='grey'){
        body.style.backgroundColor=e.target.id;
      }
      if(e.target.id==='white'){
        body.style.backgroundColor=e.target.id;
      }
      if(e.target.id==='blue'){
        body.style.backgroundColor=e.target.id;
      }
      if(e.target.id==='orange'){
        body.style.backgroundColor=e.target.id;
      }
  })
})




```
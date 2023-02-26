//////////////////////img

const logo = document.querySelector('#imga')
const butimg = document.querySelector('#rot')
let im = 0
butimg.addEventListener('click',function(){


if(im % 2 == 1){
    logo.setAttribute('src','img/ECMAScript.png')
    logo.setAttribute('heigth','300')
    
}
else{
    logo.setAttribute('src','img/js.png')
    logo.setAttribute('heigth','300')
    
}
im++
})
/////////////////////inner Text
const imptext = document.querySelector('#textinp')
const outtext = document.querySelector('#textout')
imptext.addEventListener('input',function(){
outtext.innerHTML = imptext.value
}) 


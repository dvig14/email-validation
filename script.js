const submit=document.querySelector('#btn');
const error=document.getElementById('error');
const form=document.querySelector('form');
const input=document.querySelector('input');
const label=document.querySelector('label');

form.addEventListener('submit',validate);
submit.addEventListener('click',validate);

function validate(e){
   e.preventDefault();
   const inputValue=input.value.trim()
   if(!isEmail(inputValue)){
     label.style.display='block';
     error.style.display='block';
   }
   else{
    error.style.display='none';
    label.style.display='none';
   }
}
function isEmail(input){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}
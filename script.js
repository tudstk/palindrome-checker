const txtInput = document.querySelector('.inputs input');
const checkBtn = document.querySelector('.inputs button');
let filterInput;

checkBtn.addEventListener("click", ()=>{
    let reverseInput = filterInput.split('').reverse().join('');
    //split('') - splits the input into characters, now we have an array of characters
    //reverse - we reversed the array
    //join('') - now we want the array elements without being separated with a comma
    //so we have: 12345 -> arr[5]={1,2,3,4,5} -> arr[5]={5,4,3,2,1} -> arr.join('') -> 54321
    console.log(reverseInput);
})

txtInput.addEventListener("keyup",()=>{
    //remove spaces and special characters
    filterInput = txtInput.value.replace(/[^A-Z0-9]/ig, '');
    if(filterInput){
        return checkBtn.classList.add('active');
    }
    checkBtn.classList.remove('active');
})
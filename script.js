const txtInput = document.querySelector('.inputs input');
const checkBtn = document.querySelector('.inputs button');

txtInput.addEventListener("keyup",()=>{
    //remove spaces and special characters
    let filterInput = txtInput.value.replace(/[^A-Z0-9]/ig, '');
    if(filterInput){
        return checkBtn.classList.add('active');
    }
    checkBtn.classList.remove('active');
})
const userPasswordInput = document.getElementById('user-password')
const userPasswordConfrimation = document.getElementById('user-confirm_password')
const spanErrorPopup = document.querySelector('.errorHolder')

function checkPassword(){
    password = userPasswordInput.value;
    passwordConfirm = userPasswordConfrimation.value;
    if(password != passwordConfirm){
        spanErrorPopup.classList.add('invalidPassword') 
        console.log('yo')
    }else{
        spanErrorPopup.classList.remove('invalidPassword');
    }

}


userPasswordInput.onchange = checkPassword;
userPasswordConfrimation.onchange =checkPassword;


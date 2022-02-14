const form = document.getElementById('form');

// error msg elements
const fnameError = document.getElementById('fname-err');
const lnameError = document.getElementById('lname-err');
const emailError = document.getElementById('email-err');
const passwordError = document.getElementById('password-err');

//input fields
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

let anyErr = false;

function checkFname(){
    fnameError.setAttribute('hidden',true);
    fname.classList.remove("onerror");
    let err = emptyCheck(fname.value)
    if(err){
        fnameError.removeAttribute('hidden');
        fname.classList.add("onerror");
        anyErr = true;
    }
}

function checkLname(){
    lnameError.setAttribute('hidden',true);
    lname.classList.remove("onerror");

    let err = emptyCheck(lname.value)
    if(err){
        lnameError.removeAttribute('hidden');
        lname.classList.toggle("onerror");
        anyErr = true;
    }
};

function checkEmail(){
    emailError.setAttribute('hidden',true);
    email.classList.remove("onerror");

    let err = validateEmail(email.value);
    if(err){
        emailError.removeAttribute('hidden');
        email.classList.toggle("onerror");
        email.placeholder = "email@example.com";
        anyErr = true;
    }
};

function checkPassword(){
    passwordError.setAttribute('hidden',true);
    password.classList.remove("onerror");

    let err = emptyCheck(password.value);
    if(err){
        passwordError.removeAttribute('hidden');
        password.classList.toggle("onerror");
        anyErr = true;
    }
};

function emptyCheck(val){
    let err = true;
    if(val){
        let actVal = val.trim();
        if(actVal.length > 0){
            err = false;
        }
    }
    return err;
}

function validateEmail(val){

    let err = true;
    if(emptyCheck(val)){
        return err;
    }

    if(val){
        const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        err = !emailRegExp.test(val); //returns true on valid email
    }
    return err;
}

// check for errors on blur
fname.onblur = checkFname;
lname.onblur = checkLname;
email.onblur = checkEmail;
password.onblur = checkPassword;

// check for errors on submit
form.onsubmit = function(event) {
    checkFname();
    checkLname();
    checkEmail();
    checkPassword();
    if(anyErr){
        // For this example, don't actually submit the form
        event.preventDefault();
        // submit();
    }
}

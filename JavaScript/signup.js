window.onload=function(){
const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const password = document.getElementById("password");
const email = document.getElementById("email");
const number = document.getElementById("number");
const fname_icon =document.getElementById("fname-status");
const lname_icon =document.getElementById("lname-status");
const password_icon =document.getElementById("password-status");
const email_icon =document.getElementById("email-status");
const number_icon =document.getElementById("number-status");
const bottom_section=document.getElementById("bottom-section");


signup_button=document.getElementById("signup-button");
signup_button.addEventListener("click",validate);

function validateFirstName(){
    if (fname.value.trim() ===""){
        fname_icon.classList.add("fa-xmark");
        fname_icon.classList.remove("fa-check");
        fname_correct=false;

    }
    else{
        fname_icon.classList.remove("fa-xmark");
        fname_icon.classList.add("fa-check");
        fname_correct=true;
    }
}

function validateLastName(){
    if (lname.value.trim() ===""){
        lname_icon.classList.add("fa-xmark");
        lname_icon.classList.remove("fa-check");
        lname_correct=false;

    }
    else{
        lname_icon.classList.remove("fa-xmark");
        lname_icon.classList.add("fa-check");
        lname_correct=true;
    }
}




function validatePassword(){
    if (password.value.length>8 && /[ -/:-@[-`{-~]/.test(password.value) && /[A-Z]/.test(password.value)){
        password_icon.classList.remove("fa-xmark");
        password_icon.classList.add("fa-check");
        password_correct=true;
    }
    else{
        password_icon.classList.add("fa-xmark");
        password_icon.classList.remove("fa-check");
        password_correct=false;
    }
}




function validateEmail(){
    if (email.value.trim().match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)){
        email_icon.classList.remove("fa-xmark");
        email_icon.classList.add("fa-check");
        email_correct=true;

    }
    else{
        email_icon.classList.remove("fa-check");
        email_icon.classList.add("fa-xmark");
        email_correct=false;

    }
}
function validateNumber(){
    if (number.value.trim() ===""){
        number_icon.classList.add("fa-xmark");
        number_icon.classList.remove("fa-check");
        number_correct=false;
        
    }
    else{
        number_icon.classList.remove("fa-xmark");
        number_icon.classList.add("fa-check");
        number_correct=true;
    }
}

function validate (){
    function toggleClassShake(){
        signup_button.classList.toggle("shake");
    }
    validateFirstName();
    validateLastName();
    validatePassword();
    validateEmail();
    validateNumber();
    if (fname_correct && lname_correct && password_correct && email_correct && number_correct){
        signup_button.innerHTML=`<a  id=login" href="second.html">Log In Now</a>`;
        bottom_section.classList.add("hidden");
        
        // code to save the date in an object and then save it ti local storage
        var info_object = {"f_name": fname.value, "l_name": lname.value,
        "password": password.value, "email": email.value,"number":number.value};
        localStorage.setItem('myStorage', JSON.stringify(info_object));
        console.log(info_object);
    }
    else{
        signup_button.classList.toggle("shake");
        setTimeout(toggleClassShake, 500 ) ;
    }
}


}
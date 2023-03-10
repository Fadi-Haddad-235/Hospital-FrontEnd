window.onload=function(){
const form = document.getElementById("form");
const password = document.getElementById("password");
const email = document.getElementById("email");
const password_icon =document.getElementById("password-status");
const email_icon =document.getElementById("email-status");
const bottom_section=document.getElementById("bottom-section");

login_button=document.getElementById("login-button");
login_button.addEventListener("click",validate);

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

function validate (){
    function toggleClassShake(){
        login_button.classList.toggle("shake");
    }
    validatePassword();
    validateEmail();

    if (password_correct && email_correct){
        login_button.innerHTML=`<a  id=login" href="second.html">Log In Now</a>`;
        bottom_section.classList.add("hidden");
        
        // code to save the date in an object and then save it to local storage
        var info_object = {"f_name": fname.value, "l_name": lname.value,
        "password": password.value, "email": email.value,"number":number.value};
        localStorage.setItem('myStorage', JSON.stringify(info_object));
        console.log(info_object);
    }
    else{
        login_button.classList.toggle("shake");
        setTimeout(toggleClassShake, 500 ) ;
    }
}


}
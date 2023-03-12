window.onload=function(){
const form = document.getElementById("form");

const fname = document.getElementById("fname");
const yob = document.getElementById("yob");
const password = document.getElementById("password");
const email = document.getElementById("email");
// const category = document.getElementById("category");
const category = document.querySelector('input[name="category"]');

const fname_icon =document.getElementById("fname-status");
const password_icon =document.getElementById("password-status");
const email_icon =document.getElementById("email-status");
const yob_icon =document.getElementById("yob-status");
const category_icon =document.getElementById("category-status");

const bottom_section=document.getElementById("bottom-section");

const signup_button=document.getElementById("signup-button");



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

function validateYob(){
    if (yob.value>1930 && yob.value<2005) {
        yob_icon.classList.remove("fa-xmark");
        yob_icon.classList.add("fa-check");
        yob_correct=true;

    }
    else{
        yob_icon.classList.remove("fa-check");
        yob_icon.classList.add("fa-xmark");
        yob_correct=false;
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
function validateCategory(){

    if (category.value==="Employee"|| category.value==="Patient"){
        // console.log(category.value)
        category_icon.classList.remove("fa-xmark");
        category_icon.classList.add("fa-check");
        category_correct=true;
        
    }
    else{
        category_icon.classList.remove("fa-check");
        category_icon.classList.add("fa-xmark");
        category_correct=false;
    }
}

function validate (){
    function toggleClassShake(){
        signup_button.classList.toggle("shake");
    }
    validateFirstName();
    validateYob();
    validatePassword();
    validateEmail();
    validateCategory();
    if (fname_correct && password_correct && email_correct && category_correct && yob_correct){
        
        // code to save the date in an object and then save it to local storage
        // var info_object = {"f_name": fname.value, "yob": yob.value,
        // "password": password.value, "email": email.value,"category":category.value};
        // localStorage.setItem('myStorage', JSON.stringify(info_object));
        // console.log(info_object);

        let data = new FormData();
        data.append('username', fname.value);
        data.append('yob', yob.value);
        data.append('password', password.value);
        data.append('email', email.value);
        data.append('category', category.value);
        var responseData='';
        axios({
            "method": "post",
            "url": "http://localhost/Hospital-BackEnd/signup.php",
            "data": data
        }).then((result) => {
            // const responseData = result.data;
            console.log(result.data);
            console.log(result.data.status);
            if(result.data.status=="success"){
                let  signup_button=document.getElementById("signup-button");
                let  bottom_section=document.getElementById("bottom-section");
                console.log(bottom_section.innerHTML)
                signup_button.remove();
                bottom_section.innerHTML=`<span >Sign up successful</span><span><a class="sign-in-text" href="login.html" ><u>Sign In</u> </a></span>`;
                
            }
    
        }).catch((err) => {
            console.error(err);
        });
    }
    else{
        signup_button.classList.toggle("shake");
        setTimeout(toggleClassShake, 500 ) ;
    }
}


}
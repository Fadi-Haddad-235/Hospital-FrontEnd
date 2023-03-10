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
    if (password.value.length>1 ){
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
        
        let data = new FormData();
        data.append('email', email.value);
        data.append('password', password.value);

        axios.post('http://localhost/Hospital-BackEnd/login.php', data).then(function (res) {
            console.log(res.data);
            let token = res.data.jwt;
            localStorage.setItem('token', token);
            switch (res.data.usertype) {
                case 1:
                    window.location.href = "admin.html";
                    break;
                case 2:
                    window.location.href = "employee.html";
                    break;
                case 3:
                    window.location.href = "patient.html";
                    break;}
            }).catch(function (err) {
                console.log(err);
            })
    }
    else{
        login_button.classList.toggle("shake");
        setTimeout(toggleClassShake, 500 ) ;
    }
}


}
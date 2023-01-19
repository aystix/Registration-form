const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const number = document.getElementById('phonenumber');

function validateInput() {
    if(username.value.trim()===""){
        let parent = username.parentElement
        let messageElement = parent.querySelector(".error");
        messageElement.style.visibility="visible";
        parent.classList.add("errors");
    } else{
        let parent = username.parentElement
        let messageElement = parent.querySelector(".error");
        messageElement.style.visibility="hidden";
        parent.classList.add("success");
        parent.classList.remove("errors");
    }

    if(password.value.trim()===""){
        let parent = password.parentElement
        let messageElement = parent.querySelector(".error");
        messageElement.style.visibility="visible";
        parent.classList.add("errors");
    } else{
        let parent = password.parentElement
        let messageElement = parent.querySelector(".error");
        messageElement.style.visibility="hidden";
        parent.classList.add("success");
        parent.classList.remove("errors");
    }

    if(email.value.trim()===""){
        let parent = email.parentElement
        let messageElement = parent.querySelector(".error");
        messageElement.style.visibility="visible";
        parent.classList.add("errors");
    } else{
        let parent = email.parentElement
        let messageElement = parent.querySelector(".error");
        messageElement.style.visibility="hidden";
        parent.classList.add("success");
        parent.classList.remove("errors");
    }

    if(number.value.trim()===""){
        let parent = number.parentElement
        let messageElement = parent.querySelector(".error");
        messageElement.style.visibility="visible";
        parent.classList.add("errors");
    } else{
        let parent = number.parentElement
        let messageElement = parent.querySelector(".error");
        messageElement.style.visibility="hidden";
        parent.classList.add("success");
        parent.classList.remove("errors");
    }
}




document.querySelector("button").addEventListener("click", (event)=>{
   event.preventDefault();
    validateInput();
})
function validateEmail(){
    let validation = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
    let email = document.getElementById("email")
    return validation.test(email) 
}

function validateDNI(){
    let validation = new RegExp("^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$")
    let dni = document.getElementById("dni")
    return validation.test(dni) 
}

function validateTel(){
    let validation = new RegExp("^\\d{9}$")
    let phone = document.getElementById("tel")
    return validation.test(phone) 
}

function validateUserName(){
    let validation = new RegExp("^(?=.*[A-Za-z])(?=.*d)(?=.*[.,;])[A-Za-zd.,;]{8,}$");
    let user = document.getElementById("user")
    return validation.test(user) 
}
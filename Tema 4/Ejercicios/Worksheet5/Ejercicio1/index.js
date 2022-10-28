function validateUpperCase(str){
    let regExp = RegExp("[A-Z]")
    return regExp.test(str)
}
document.write(validateUpperCase("Hola"))


function validateSpecialChart(str){
    let specialChars = RegExp("[!@#$%^&]");
    return specialChars.test(str);
}
document.write(validateSpecialChart("adios$"))


function validateEmail(str){
    let validation = RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
    return validation.test(str) 
}
document.write(validateEmail("saracarmar@gmail.com"))


function validateCreditCard(str){
    let regExp = RegExp("^\d{16}$");
    return regExp.test(str) 
}
document.write(validateCreditCard("1234567891023456"))


function validateLength(str){
    let regExp = RegExp("^.{8,}$");
    return regExp.test(str) 
    
}
document.write(validateLength("holabuenosdias"))


function validateNumber(str){
    return RegExp(".*[0-9]*.$").test(str)
    
}

document.write(validateNumber("hola8"))

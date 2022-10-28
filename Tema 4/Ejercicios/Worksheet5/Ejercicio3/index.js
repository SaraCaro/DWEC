document.getElementById("user").addEventListener("keyup",() => {
    let username = document.getElementById("user");
    let lower = document.getElementById("lower");
    let upper = document.getElementById("upper");
    let length = document.getElementById("minimum");
    
    let lowerRegExp = new RegExp(".*[a-z].*");
    let upperRegExp = new RegExp(".*[A-Z].*");
    let minRegExp = new RegExp("^.{6,}$")

    if(lowerRegExp.test(username.value)){
        lower.style.textDecoration = "line-through";
    }
    else{
        lower.style.textDecoration = "none";
    }

    if(upperRegExp.test(username.value)){
        upper.style.textDecoration = "line-through";
    }
    else{
        upper.style.textDecoration = "none";
    }

    if(minRegExp.test(username.value)){
        length.style.textDecoration = "line-through";
    }
    else{
        length.style.textDecoration = "none";
    }

})
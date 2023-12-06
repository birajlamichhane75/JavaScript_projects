let upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerSet = "abcdefghijklmnopqrstuvwxyz";
let numberSet = "1234567890";
let specialSet = "~!#$%^&*()_+";

let getRamdomdata = (dataSet) =>{
   
    return dataSet[Math.round(Math.random()* dataSet.length)]
}
let totalChar = document.getElementById('totalchar')
let passBox = document.getElementById('pass')
let upper = document.getElementById('upper-case');
let lower = document.getElementById('lower-case');
let number = document.getElementById('number');
let special = document.getElementById('special');





generatePassword = (password = "") =>{
    if(upper.checked){
        password += getRamdomdata(upperSet);
    
    }
     if(lower.checked){
        password += getRamdomdata(lowerSet);
    
    }
     if(number.checked){
        password += getRamdomdata(numberSet);
    
    }
     if(special.checked){
        password += getRamdomdata(specialSet);
    }
    if(password.length < totalChar.value){
        return generatePassword(password);
    }
    showPassword(password);
}
document.getElementById('btn').addEventListener(
    "click",
    function(){
        generatePassword();

    }
)

let showPassword = (pass) =>{
    passBox.innerText = pass;
}


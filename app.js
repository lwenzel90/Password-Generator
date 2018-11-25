let button = document.getElementById('createPassword');
let lowercaseCheckBox = document.getElementById("lowercase");
let uppercaseCheckBox = document.getElementById("uppercase");
let numberCheckBox = document.getElementById("numbers");
let specialCheckBox = document.getElementById("special");


// Show a password on load 
window.onload = displayPassword;

button.addEventListener('click', function(){
    let password = generatePassword(10);
    document.getElementById('password').innerHTML = "Password: " + password;
});

function displayPassword(){
    document.getElementById('password').innerHTML = "Password: " + generatePassword(10);
}

function generatePassword(len){
    let result = "";
    for(let i = 0; i < len; i++){
        let curr;
        // get a 0 1 or 2 then preform switch case 
        // switch 0 uppercase, 1 lowercase, 2 numbers, 3 special values (!@#$%^&*)
        let caseNum = getRandomInt(0, 4);  
        switch(caseNum) {
            case 0:
                if(uppercaseCheckBox.checked === true){
                    curr = getRandomInt(65, 90);
                    result += String.fromCharCode(curr);
                    break;
                }
            case 1:
                if(lowercaseCheckBox.checked === true){
                    curr = getRandomInt(97, 122);
                    result += String.fromCharCode(curr);
                    break;
                }
            case 2:
                if(numberCheckBox.checked === true){
                    curr = getRandomInt(48, 57);
                    result += String.fromCharCode(curr);
                    break;
                }
            case 3:
                if(specialCheckBox.checked === true){
                    curr = getRandomInt(33, 38);
                    result += String.fromCharCode(curr);
                    break;
                }
            default: 
                i--; // This makes sure that if no character is added then it will not count a letter
        }
    }
    console.log(result.length);
    return result;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
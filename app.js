document.getElementById('password').innerHTML = "Password: " + generatePassword(10);
button = document.getElementById('createPassword');

button.addEventListener('click', function(){
    document.getElementById('password').innerHTML = "Password: " + generatePassword(10);
});

function generatePassword(len, optionsObj){
    let result = "";
    for(let i = 0; i < len; i++){
        let curr;
        // get a 0 1 or 2 then preform switch case 
        // switch 0 lowercase, 1 upper, 2 numbers, 3 special values (!@#$%^&*)
        let caseNum = getRandomInt(0, 4);
        
        switch(caseNum) {
            case 0:
                curr = getRandomInt(65, 90);
                result += String.fromCharCode(curr);
                break;
            case 1:
                curr = getRandomInt(97, 122);
                result += String.fromCharCode(curr);
                break;
            case 2:
                curr = getRandomInt(48, 57);
                result += String.fromCharCode(curr);
                break;
            case 3:
                curr = getRandomInt(33, 64);
                result += String.fromCharCode(curr);
                break;
        }
    }
    console.log(result);
    return result;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
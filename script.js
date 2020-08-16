//global variables
var generateBtn = document.querySelector("#generate");
let pw = "";
let masterArr = [];
let lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let capArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let symbolArr = ['!','@','#','$','%','}','{'];
let numArr = [1,2,3,4,5,6,7,8,9,0];
let startNum 


//validate that input is a number between 8 and 128
function valNumber() {
  do {
    //prompt to meet all criteria
    startNum = window.prompt('Please enter a number between 8 and 128');
    startNum = parseInt(startNum);
    var lowerCase = window.confirm("Would you like to include lowercase letters? Select 'ok' or 'cancel'.")
    var upperCase = window.confirm("Would you like to include Uppercase letters? Select 'ok' or 'cancel'.");
    var useSymbol = window.confirm(" Would you like to use symbols? Select 'ok' or 'cancel'.");
    var useNumbers = window.confirm("Would you like to use numbers? Select \"ok\" or \"cancel\".");
    
    if(startNum >= 8 && startNum <= 128){
      //while the masterArr. length is less than the number given.  
      while( masterArr.length < startNum){
        //in the while loop it will check each if each criteria is met and will call the getRandom function while passing the parameter of the variable.
        if (lowerCase && masterArr.length < startNum) {
          getRandom(lowerArr);
        } 
        if(upperCase && masterArr.length < startNum){
          getRandom(capArr);
        }
        if(useSymbol && masterArr.length < startNum){
          getRandom(symbolArr);
        }
        if(useNumbers && masterArr.length < startNum){
          getRandom(numArr);
        }
      }
    } else {
      alert('that is not a good password');
    }
  } while(!(startNum >= 8 && startNum <= 128));
};
//get random function
function getRandom(arr) {
//random functionality
  let randomItem = arr[Math.floor(Math.random() * arr.length)];
//pushing the random value into the masterArr
  masterArr.push(randomItem);
//making the array a string
  pw = masterArr.join('');
//storing the document.querySelector calling upon the id of #password
  var passwordText = document.querySelector("#password");
//making the value of the line above your current password.
  passwordText.value = pw;

};

generateBtn.addEventListener("click", valNumber);
  
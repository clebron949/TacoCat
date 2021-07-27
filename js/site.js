// Global Variables
let form = document.getElementById("form");
form.addEventListener('submit',Rewind);

//Functions
function Rewind(event) {
    
    let sentence = document.getElementById('inputText').value;
    console.log(sentence);

    let reversed = ""
    for (let index = sentence.length - 1; index > -1; index--){  
        reversed += sentence[index];   
    }
    console.log(sentence+";"+reversed);

    updateResult(sentence,reversed);
    event.preventDefault();
};

function updateResult(text,backText) {
    let count = 0;
    let element = document.getElementById('myResults');
    
    for (let index = 0; index < text.length; index++) {
        if (text[index] == backText[index]) {
            count++;
        }        
    }
    if (count === text.length) {
        element.textContent = 'Success ' + backText + ' is Palindrome';
    }
    else{
        element.textContent = 'Oops '  + backText  + ' is Not Palindrome';
    }
    
    
}
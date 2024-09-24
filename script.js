//Calculator program 

const display = document.getElementById('display');

function appendToDisplay(input){
display.value += input;
} 

function clearDisplay(){
display.balue = '';
}

function calculate (){
    try{
display.value = eval(display.value);
    }
    catch{
        display.value = 'Error';
    }

}
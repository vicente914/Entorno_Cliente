//Calculator program

const display = document.getElementById("display");


function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);//Executing JavaScript from a string is 
                        //an enormous security risk !!!
    }
    catch(error){
        display.value = "Error";
    }
}
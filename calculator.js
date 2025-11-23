let screen = document.getElementById("screen");



function input(value){
    screen.value += value;
}
//this makes sure you cannot type any letters/keyboard
screen.addEventListener("input", () =>{
    const allowedChars = /^[0-9+\-*/.%()π√]*$/;

    if (!allowedChars.test(screen.value)){
        screen.value = "";
        screen.placeholder = "Numbers Only!";
        setTimeout (() => screen.placeholder = "", 2000);
    }

});

// clear btn
function clearScreen(){
    
    screen.value = "";
}

//delete btn
function deleteLast(){
    screen.value = screen.value.slice(0, -1);
}
// = btn
function calculate() {
    //this saves whatever the user typed into a variable
    let expression = screen.value;
    try{
        //tries to actually solve the math using eval
        let result = eval(expression);
        //check for division by 0
        if (result === Infinity || result === -Infinity) {
            screen.value = "Cannot divide by 0"; //error message
            setTimeout(() => screen.value = "", 1500);
            return; //this will make sure nothing else runs
        }
        screen.value = result;
    } catch{
        screen.value = "Error";
        // clears after 2 secs
        setTimeout(() => screen.value = "", 2000);
    }
}

//square root btn
function squareRoot(){
    try{
        screen.value = Math.sqrt(eval(screen.value));
    } catch {
        screen.value = "Error";
    }
}

// power btn
function power(){
    screen.value += "**";
}

//pi btn
function pi(){
    screen.value += Math.PI
}
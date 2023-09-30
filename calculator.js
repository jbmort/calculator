//VARIABLES

let varCounter = 1;
let funcVal;
let eqCount = 0;
let answer = ''
let newAnswer = ''
let numOne = ''
let numTwo = ''
let extraAnswer

let numBtn = document.getElementsByClassName('number');
let opBtn = document.getElementsByClassName('operator');
let clear = document.getElementById('clear');
let equal = document.getElementById('equals');
let screen = document.getElementById('screenText');
let opScreen = document.getElementById('operation');

// EVENT LISTENERS

for (i=0; i<numBtn.length; i++){
numBtn[i].addEventListener('click', numberClick, false);
}
for (i=0; i<opBtn.length; i++){
opBtn[i].addEventListener('click', opClick, false);
}
clear.addEventListener('click', clearClick);
equal.addEventListener('click', equalClick);


//FUNCTIONS

function numberClick(event){
    console.log(numOne);
    if (eqCount == 0|| eqCount == 2){
        eqCount++;}
    if(varCounter === 1){
        if (numOne == 'NaN'){
            numOne = '';
            numOne += event.target.value;
            screenSet()}
        else {
            numOne += event.target.value;
            screenSet()}}
    if(varCounter === 2){
        numTwo += event.target.value;}
    screenSet();
    }

function opClick(event){
    if (eqCount == 0 || eqCount === 2){return}
    if (eqCount == 3){
        equalClick();
        funcVal = event.target.value;
        eqCount = 2;
        varCounter = 2;
        screenSet();
    }
    if (eqCount == 1 && numOne == 'NaN'){
        funcVal = event.target.value;
        eqCount = 2;
        screenSet();
        varCounter = 2;
    }
    if (eqCount == 1){
        funcVal = event.target.value;
        varCounter++;
        eqCount++;
        screenSet(); 
    }
}

function clearClick(){
    varCounter = 1;
    eqCount = 0;
    funcVal = 0;
    numOne = '';
    numTwo = '';
    answer = '';
    newAnswer = '';
    screenSet();
}

function equalClick(){
    console.log(numOne)
    if (eqCount == 3 && funcVal == 4 && numTwo == '0'){
        screen.innerText = "INVALID";
    }
    else if (eqCount == 3 && numOne == 'NaN') {
        if (funcVal == 1) {
            newAnswer = Number(answer) + Number(numTwo);
            next()
        }
        if (funcVal == 2){
            newAnswer = Number(answer) - Number(numTwo);
            next()
        }
        if (funcVal == 3){
            newAnswer = Number(answer) * Number(numTwo);
            next()
        }
        if (funcVal == 4){
            newAnswer = Number(answer) / Number(numTwo);
            next()
        }
    }
    else if (eqCount == 3){
        if (funcVal == 1) {
            extraAnswer = Number(numOne) + Number(numTwo);
            if (Number(extraAnswer) > 999999999){
                answer = String(Number(extraAnswer).toExponential())
            }
            else {
                answer = String(+Number(extraAnswer).toFixed(3));
                screenSet();}
            next()
        }
        if (funcVal == 2){
            extraAnswer = Number(numOne) - Number(numTwo);
            if (Number(extraAnswer) > 999999999){
                answer = String(Number(extraAnswer).toExponential())
            }
            else {
                answer = String(+Number(extraAnswer).toFixed(3));
                screenSet();}
            next()
        }
        if (funcVal == 3){
            extraAnswer = Number(numOne) * Number(numTwo);
            if (Number(extraAnswer) > 999999999){
                answer = String(Number(extraAnswer).toExponential())
            }
            else {
                answer = String(+Number(extraAnswer).toFixed(3));
                screenSet();}
            next()
        }
        if (funcVal == 4){
            extraAnswer = Number(numOne) / Number(numTwo);
            if (Number(extraAnswer) > 999999999){
                answer = String(Number(extraAnswer).toExponential())
            }
            else {
                answer = String(+Number(extraAnswer).toFixed(3));
                screenSet();}
            next()
        }
}}

function screenSet(){
    console.log(eqCount)
    if (eqCount == 0){
        screen.innerText = 0;
        opScreen.innerText = '';
    }
    if (eqCount == 1){
        if (numOne == 'NaN'){
            screen.innerText = answer;}
        else {screen.innerText = numOne;
            opScreen.innerText = '';}
    }
    if (eqCount == 2){
        if (funcVal == 1){
            opScreen.innerText = '+';}
        if (funcVal == 2){
            opScreen.innerText = '-';}
        if (funcVal == 3){
            opScreen.innerText = 'x';}
        if (funcVal == 4){
            opScreen.innerText = '÷';}
        }
    if (eqCount == 3){
        screen.innerText = numTwo;
        opScreen.innerText = '';
    }
}
        
function next(){
    eqCount = 1;
    // screenSet();
    varCounter = 1;
    numTwo = '';
    funcVal = '';
    if (numOne == 'NaN'){
        if (Number(newAnswer) > 999999999){
            answer = String(Number(newAnswer).toExponential())
        }
        else {
            answer = String(+Number(newAnswer).toFixed(3));
            screenSet();}
    }
    else {
        numOne = 'NaN';
        screenSet();
        console.log(numOne)}
    }

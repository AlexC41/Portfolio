// digit 0 to 9
let digit0 = document.querySelector("#digit0");
let digit1 = document.querySelector("#digit1");
let digit2 = document.querySelector("#digit2");
let digit3 = document.querySelector("#digit3");
let digit4 = document.querySelector("#digit4");
let digit5 = document.querySelector("#digit5");
let digit6 = document.querySelector("#digit6");
let digit7 = document.querySelector("#digit7");
let digit8 = document.querySelector("#digit8");
let digit9 = document.querySelector("#digit9");

// operations +, -, *, /, period, sqrt, power 2, power y, reverse sign and =

let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let period = document.querySelector("#period");
let sqrt = document.querySelector("#sqrt");
let percent = document.querySelector("#percent");
let powery = document.querySelector("#powery");
let reverse = document.querySelector("#reverse");
let equal = document.querySelector("#equal");

// operations delete, clear current, clear all and result

let del = document.querySelector("#del");
let clear = document.querySelector("#clear");
let sentence = document.querySelector(".sentence");
let result = document.querySelector(".result");


// initializare + flags

let firstNumber = 0;
let secondNumber = 0;
let startSecondNumber = false;
let operation = "";

let history = "";
let test = "";

// constructia numerelor

function buildNumber (numberReceived) {
    sentenceBig ();
    if (startSecondNumber === false) {
        firstNumber = firstNumber * 10 + numberReceived;
        history = firstNumber
        sentence.innerHTML = history;
        result.innerHTML = "= " + firstNumber; // afisare numar 
    } else {
        secondNumber = secondNumber * 10 + numberReceived;
        test = secondNumber;
        sentence.innerHTML = history + test
        result.innerHTML = "= " + eval(firstNumber + symbol + secondNumber); // afisare numar 
    }
}

// realizarea operatiilor

function sentenceBig (){
    document.querySelector(".result").style = "font-size: 20px; opacity: 50%";
    document.querySelector(".sentence").style = "font-size: 30px; opacity: 100%";
}

function resultBig (){
    document.querySelector(".result").style = "font-size: 30px; opacity: 100%";
    document.querySelector(".sentence").style = "font-size: 20px; opacity: 50%";
}

add.addEventListener("click", function (){
    startSecondNumber = true;
    symbol = "+";
    sentence.innerHTML = firstNumber + "+";
    operation = "add";
    history = history + symbol;
    sentenceBig ();
});
subtract.addEventListener("click", function (){
    startSecondNumber = true;
    symbol = "-";
    sentence.innerHTML = firstNumber + "-";
    operation = "subtract";
    history = history + symbol;
    sentenceBig ();
});
multiply.addEventListener("click", function(){
    startSecondNumber = true;
    symbol = "*";
    sentence.innerHTML = firstNumber + "*";
    operation = "multiply";
    history = history + symbol;
    sentenceBig ();
});
divide.addEventListener("click", function(){
    startSecondNumber = true;
    symbol = "/";
    sentence.innerHTML = firstNumber + "/";
    operation = "divide";
    history = history + symbol;
    sentenceBig ();
});
percent.addEventListener("click", function(){
    startSecondNumber = true;
    symbol = "%";
    sentence.innerHTML = firstNumber + "%";
    operation = "percent";
    history = history + symbol;
    sentenceBig ();
});
clear.addEventListener("click", function(){
    firstNumber = 0;
    secondNumber = 0;
    startSecondNumber = false;
    sentence.innerHTML = "One operation at a time";
    result.innerHTML = "Press = after every operation";
    sentenceBig ();
});
// del.addEventListener("click", function(){
//     if (startSecondNumber === false) {
//         firstNumber = firstNumber / 10 - numberReceived;
//         history = firstNumber
//         sentence.innerHTML = history;
//         result.innerHTML = "= " + firstNumber; // afisare numar 
//     } else {
//         secondNumber = secondNumber - numberReceived;
//         test = secondNumber;
//         sentence.innerHTML = history + test
//         result.innerHTML = "= " + eval(firstNumber + symbol + secondNumber); // afisare numar 
//     }
// });
// reverse.addEventListener("click", function(){
//     if(startSecondNumber === false) {
//         firstNumber = firstNumber * -1
//     } else {
//         secondNumber =secondNumber * -1
//     }
// });

equal.addEventListener("click", function (){
    let finalResult = 0;
    switch (operation) {
        case "add" :
            finalResult = firstNumber + secondNumber;
            result.innerHTML = "= " + finalResult;
            firstNumber = finalResult;
            history += secondNumber;
            break;
        case "subtract" :
            finalResult = firstNumber - secondNumber;
            result.innerHTML = "= " + finalResult;
            firstNumber = finalResult;
            history += secondNumber;
            break;
        case "multiply" :
            finalResult = firstNumber * secondNumber;
            result.innerHTML = "= " + finalResult;
            firstNumber = finalResult;
            history += secondNumber;
            break;
        case "divide" :
            finalResult = firstNumber / secondNumber;
            result.innerHTML = "= " + finalResult;
            firstNumber = finalResult;
            history += secondNumber;
            break;
        case "sqrt" :
            finalResult = Math.sqrt(secondNumber);
            result.innerHTML = "= " + finalResult;
            firstNumber = finalResult;
            history += secondNumber;
            break;
        case "powery" :
            finalResult = Math.pow(firstNumber, secondNumber);
            result.innerHTML = "= " + finalResult;
            firstNumber = finalResult;
            history += secondNumber;
            break;
        case "percent" :
            finalResult = firstNumber / 100;
            result.innerHTML = "= " + finalResult;
            firstNumber = finalResult;
            history += secondNumber;
            break;
        default :
            alert("Duuuuude, ceva ai facut gresit pe undeva :))")
    }
    secondNumber = "";
    startSecondNumber = false;
    operation = "";
    resultBig ();
});

//digits events
digit0.addEventListener("click", function(){buildNumber(0);});
digit1.addEventListener("click", function(){buildNumber(1);});
digit2.addEventListener("click", function(){buildNumber(2);});
digit3.addEventListener("click", function(){buildNumber(3);});
digit4.addEventListener("click", function(){buildNumber(4);});
digit5.addEventListener("click", function(){buildNumber(5);});
digit6.addEventListener("click", function(){buildNumber(6);});
digit7.addEventListener("click", function(){buildNumber(7);});
digit8.addEventListener("click", function(){buildNumber(8);});
digit9.addEventListener("click", function(){buildNumber(9);});

// sqrt.addEventListener("click", function(){
//     symbol = "&#x221A ";
//     sentence.innerHTML = "&#x221A " + firstNumber
// });
// powery.addEventListener("click", function(){
//     operation = "powery";
//     symbol = "^";
//     sentence.innerHTML = firstNumber + "^"
// });

document.getElementById("answer").readOnly = true; 
let screen = document.getElementById("answer");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        if (buttonText == "X") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == "=") {
            checkForBracketMulti(); // automatically evaluates if no brackets
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}


  window.onerror = function () {
     alert("PLEASE INPUT VALID EXPRESSION");
     screenValue = "";
     screen.value = screenValue;
     console.clear();
 };


 function checkForBracketMulti() {
    // Check if there's a number directly infront of a bracket
      if (screen.value.includes("(") &&
          !isNaN(screen.value.charAt(screen.value.indexOf("(") - 1))
    ) {
           window.onBracketMultiplication();
         return;
       } else {
         screen.value = eval(screenValue);
     }
   }
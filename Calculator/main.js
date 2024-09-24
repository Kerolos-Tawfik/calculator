// the displayed number
let theNumber = "";
let op;
//the display clicked btns functionz
function theNumberClicked(btn) {
  let finallResult = 0;

  let display = document.getElementById("display");
  let pastdisplay = document.getElementById("pastDisplay");
  //btn was clicked

  let clickedbtn = btn.innerHTML;
  //take the opp

  if (theNumber.length < 12) {
    switch (clickedbtn) {
      case "+":
        op = "+";
        if (theNumber.length >= 1) {
          finallResult = +pastdisplay.innerHTML + +theNumber;
          pastdisplay.innerText = finallResult;
          theNumber = "";
          display.innerText = finallResult;
        }

        break;
      case "-":
        op = "-";
        if (theNumber.length >= 1) {
          finallResult = +pastdisplay.innerHTML - +theNumber;
          pastdisplay.innerText = finallResult;
          theNumber = "";
          display.innerText = finallResult;
        }
        break;

      case "x":
        op = "*";
        if (theNumber.length >= 1) {
          if (pastdisplay.innerHTML == "") {
            finallResult = theNumber;
            pastdisplay.innerText = finallResult;
            theNumber = "";
            display.innerText = finallResult;
          } else {
            finallResult = +pastdisplay.innerHTML * +theNumber;
            pastdisplay.innerText = finallResult;
            theNumber = "";
            display.innerText = finallResult;
          }
        }
        break;

      case "/":
        op = "/";
        if (theNumber.length >= 1) {
          if (pastdisplay.innerHTML == "") {
            finallResult = theNumber;
            pastdisplay.innerText = finallResult;
            theNumber = "";
            display.innerText = finallResult;
          } else {
            finallResult = +pastdisplay.innerHTML / +theNumber;
            pastdisplay.innerText = finallResult;
            theNumber = "";
            display.innerText = finallResult;
          }
        }
        break;
      case "Del":
        if (theNumber.length > 1) {
          theNumber = theNumber.slice(0, theNumber.length - 1);
          display.innerHTML = theNumber;
        } else {
          theNumber = "";
          display.innerText = 0;
        }

        break;

      case "=":
        switch (op) {
          case "+":
            if (theNumber.length >= 1) {
              finallResult = +pastdisplay.innerHTML + +theNumber;
              pastdisplay.innerText = finallResult;
              theNumber = "";
              display.innerText = finallResult;
            }
            break;

          case "-":
            if (theNumber.length >= 1) {
              finallResult = +pastdisplay.innerHTML - +theNumber;
              pastdisplay.innerText = finallResult;
              theNumber = "";
              display.innerText = finallResult;
            }

            break;

          case "*":
            if (theNumber.length >= 1) {
              finallResult = +pastdisplay.innerHTML * +theNumber;
              pastdisplay.innerText = finallResult;
              theNumber = "";
              display.innerText = finallResult;
            }

            break;
          case "/":
            if (theNumber.length >= 1) {
              finallResult = +pastdisplay.innerHTML / +theNumber;
              pastdisplay.innerText = finallResult;
              theNumber = "";
              display.innerText = finallResult;
            }
            break;
        }

        break;
      case "CE":
        theNumber = "";
        display.innerText = "0";
        break;
      case "C":
        theNumber = "";
        display.innerHTML = "0";
        pastdisplay.innerHTML = "";
        finallResult = "";
        break;
      case "%":
        finallResult = +pastdisplay.innerHTML / 100;
        pastdisplay.innerText = finallResult;
        theNumber = "";
        display.innerText = finallResult;
        break;

      default:
        theNumber += clickedbtn;
        display.innerHTML = theNumber;

        break;
    }
  }
}

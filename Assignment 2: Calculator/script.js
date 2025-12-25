const screen = document.querySelector(".screen input");

const buttons = document.querySelectorAll(".btn");

// Variable to store values and operator
let currentVal = "";
let previousVal = "";
let operator = "";

//listen click event on every button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button.innerText);

    //check if button is a number button
    if (button.classList.contains("number")) {
      //one numb can have only one decimal
      if (button.innerText === "." && currentVal.includes(".")) return;

      currentVal = currentVal + button.innerText;
      screen.value = previousVal + operator + currentVal; //display it on a screen
    }

    //if button is a clear button
    if (button.classList.contains("clear")) {
      currentVal = "";
      previousVal = "";
      operator = "";
      screen.value = "";
    }

    //if button is a delete button-- del the last digit
    if (button.classList.contains("delete")) {
      currentVal = currentVal.slice(0, -1);
      screen.value = previousVal + operator + currentVal;;
    }

    if (button.classList.contains("percent")) {
      //when there is only one number
      if (previousVal == "") {
        if (currentVal === "") {
          return;
        }

        currentVal = (Number(currentVal) / 100).toString();
        screen.value = currentVal;
        return;
      }

      //% after operator (200 + 10 %)
      if (previousVal !== "" && currentVal !== "") {
        currentVal = (
          (Number(previousVal) * Number(currentVal)) /
          100
        ).toString();
        screen.value = previousVal + operator + currentVal;
        return;
      }
    }

    // button is an oopertor --store it
    if (button.classList.contains("operator")) {
      if (currentVal === "") {
        return;
      }
      previousVal = currentVal;
      operator = button.innerText;
      currentVal = "";
      screen.value = previousVal + operator;
    }

    //id button is an equal button -- perform operation
    if (button.classList.contains("equal")) {
      if (currentVal == "" || previousVal === "") {
        return;
      }

      let num1 = Number(previousVal);
      let num2 = Number(currentVal);

      let ans;
      if (operator === "+") ans = num1 + num2;
      if (operator === "-") ans = num1 - num2;
      if (operator === "*") ans = num1 * num2;
      if (operator === "/") ans = num2 !== 0 ? num1 / num2 : "Error";

      screen.value = ans;
      currentVal = ans.toString();
      operator = "";
      previousVal = "";
    }
  });
});

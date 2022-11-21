const buttons = document.querySelectorAll("button");
const input = document.querySelector("#input");
const output = document.querySelector("#output");

// flagging / alat bantu untuk mereset input
let reset = false;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "AC":
        input.innerText = 0;
        output.innerText = 0;
        break;

      case "C":
        input.innerText = 0;
        break;

      case "erase":
        if (input.innerText.length > 1) {
          input.innerText = input.innerText.slice(0, -1);
        } else {
          input.innerText = 0;
        }
        break;

      case "=":
        output.innerText = printOutput(input.innerText);

        reset = true;
        break;

      default:
        if (reset) {
          input.innerText = 0;
        }

        if (input.innerText === "0") {
          input.innerText = "";
          input.innerText += e.target.value;

          reset = false;
        } else {
          input.innerText += e.target.value;
          reset = false;
        }
        break;
    }
  });
});

function printOutput(input) {
  const regex = /-|x|\+|:/;

  const operand = input.match(regex);

  const arrInput = input.split(regex);

  if (arrInput.length > 2) {
    alert("Hanya bisa 1 kali operasi");

    return 0;
  } else if (arrInput.length === 1) {
    return input;
  } else {
    return operation(arrInput[0], operand[0], arrInput[1]);
  }
}

function operation(num1, operand, num2) {
  const number1 = Number(num1);
  const number2 = Number(num2);

  if (operand === "+") {
    return number1 + number2;
  } else if (operand === "-") {
    return number1 - number2;
  } else if (operand === "x") {
    return number1 * number2;
  } else if (operand === ":") {
    return number1 / number2;
  }
}

(function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;

  let time = hh + ":" + mm;

  document.getElementById("clock").innerText = time;

  let t = setTimeout(function () {
    currentTime();
  }, 1000);
})();

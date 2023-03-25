const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input,
      nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling;

    // if the value more than 1 clear it
    if (currentInput.value.length > 1) {
      currentInput.value = "";
    }
    // if the next input is disabled and the current value is not empty
    // enable the next input and focus on it

    if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
      nextInput.removeAttribute("disabled")
      nextInput.focus()
    }

    // if the backspace key is pressed
    if (e.key === "Backspace") {
      // iterate over all inputs again
      inputs.forEach((input, index2) => {
        // if the index1 of the current input is less than or Equal to the index2 of the input in the outer loop
        // and the previous element exists, set the disabled attribute on the input and focus on the previous element
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true)
          currentInput.value = ""
          prevInput.focus()
        }
      })
    }
    // if the fourth input (which index number is 3) is not empty and has disable attribute then .
    // add active class if not then remove the active class .

    if (!inputs[3].disabled && inputs[3].value !== "") {
      button.classList.add("active")
    } else {
      button.classList.remove("active")
    }
  });
});

window.addEventListener("load", () => inputs[0].focus())
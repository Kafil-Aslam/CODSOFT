document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const btnContainer = document.querySelector(".btn-container");

    const buttons = [
        "7", "8", "9", "+",
        "4", "5", "6", "-",
        "1", "2", "3", "*",
        "0", "C", "=", "/"
    ];

    buttons.forEach((text) => {
        const button = document.createElement("button");
        button.textContent = text;

        if (text === "C") {
            button.classList.add("clear");
            button.addEventListener("click", clearDisplay);
        } else if (text === "=") {
            button.classList.add("equal");
            button.addEventListener("click", calculate);
        } else if (["+", "-", "*", "/"].includes(text)) {
            button.classList.add("operator");
            button.addEventListener("click", () => appendToDisplay(text));
        } else {
            button.addEventListener("click", () => appendToDisplay(text));
        }

        btnContainer.appendChild(button);
    });

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function calculate() {
        try {
            const result = eval(display.value);
            display.value = result;
        } catch (error) {
            display.value = 'Error';
        }
    }
});

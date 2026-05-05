function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum").textContent = "Please enter valid numbers.";
        return;
    }

    document.getElementById("sum").innerHTML =
        "Sum: " + (num1 + num2) + "<br>" +
        "Difference: " + (num1 - num2) + "<br>" +
        "Product: " + (num1 * num2) + "<br>" +
        "Quotient: " + (num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero") + "<br>" +
        "Remainder: " + (num1 % num2);
}

function clearFields() {
    document.getElementById("sum").textContent = "";
}
function onCalculate() {
    let expression = document.getElementById('expression').value
    console.log(eval(expression))
    document.getElementById('result').innerHTML = eval(expression)
}

document.addEventListener('DOMContentLoaded', function () {
    let inputField = document.getElementById('expression');

    inputField.addEventListener('input', function (event) {
        let inputValue = event.target.value;
        event.target.value = sanitizeInput(inputValue);
    });

    function sanitizeInput(input) {
        // Remove any non-digit, non-operator, non-parentheses, and non-decimal characters
        return input.replace(/[^0-9+\-*/().]/g, '');
    }
});



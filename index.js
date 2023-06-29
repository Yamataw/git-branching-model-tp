class Expression{
    constructor(expression, result) {
        this.expression = expression;
        this.result = result;
    }
}
var results = []


function onCalculate() {
    let expression = document.getElementById('expression').value;
    let current = new Expression(expression,eval(expression));
    document.getElementById('result').innerHTML = current.result;
    results.push(current);
    updateExpressionResults()
}

function onClear() {
    document.getElementById('expression').value = "";
    results = [];

}

function onClearError() {
    if(results.length > 1) {
        document.getElementById('expression').value = results[results.length - 1].expression;
        document.getElementById('result').value = results[results.length - 1].result;
        results.pop()
        updateExpressionResults()
    }

}


function updateExpressionResults() {
    var expressionResultsElement = document.getElementById("history");
    expressionResultsElement.innerHTML = ""; // Réinitialiser le contenu

    results.forEach(function(expression) {
        let expressionElement = document.createElement("p");
        expressionElement.textContent = `${expression.expression} = ${expression.result}`;
        expressionResultsElement.appendChild(expressionElement);
    });
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

    inputField.addEventListener("keyup", function(event) {
            event.preventDefault();
            if(event.key === "Enter") onCalculate();
        });

});



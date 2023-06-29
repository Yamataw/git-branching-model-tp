class Expression{
    constructor(expression, result) {
        this.expression = expression;
        this.result = result;
    }
}
var results = []

function updateExpressionResults() {
    var expressionResultsElement = document.getElementById("history");
    expressionResultsElement.innerHTML = ""; // Réinitialiser le contenu

    results.forEach(function(expression) {
        let expressionElement = document.createElement("p");
        expressionElement.textContent = `${expression.expression} = ${expression.result}`;
        expressionResultsElement.appendChild(expressionElement);
    });
}
function onCalculate() {
    let expression = document.getElementById('expression').value;
    let current = new Expression(expression,eval(expression));
    console.log(current.result);
    document.getElementById('expression').value = current.result;
    results.push(current);
    updateExpressionResults()
}

function onClear() {
    document.getElementById('expression').value = "";
    results = [];
    updateExpressionResults()


}

function onClearError() {
    if(results.length > 1) {
        document.getElementById('expression').value = results[results.length - 1].expression;
        results.pop()
        updateExpressionResults()
    }

}



function appendToExpression(val){
    document.getElementById('expression').value += val
}
function deleteLastCharacter() {
    let expressionInput = document.getElementById('expression');
    let expression = expressionInput.value;

    if (expression.length > 0) {
        expression = expression.slice(0, -1);
        expressionInput.value = expression;
    }
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



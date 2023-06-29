class Expression{
    constructor(expression, result) {
        this.expression = expression;
        this.result = result;
    }
}
var results = []

function updateExpressionResults() {
    var expressionResultsElement = document.getElementById("history");
    expressionResultsElement.innerHTML = "<b>Historique :</b>"; // Réinitialiser le contenu

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
function convertToString(expressionObj) {
    return `${expressionObj.expression};${expressionObj.result}`;
}

function generateCSV(){
    if(results.length > 0) {
        let headers = ['Expression', 'Result'];
        let csvContent = headers.join(';') + '\n';
        csvContent += results.map(convertToString).join('\n');
        let blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        let url = URL.createObjectURL(blob);
        let link = document.createElement('a');
        link.href = url;
        link.download = 'expressions.csv';
        link.click();
        URL.revokeObjectURL(url);

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

document.addEventListener('keydown', function(event) {
    var keyPressed = event.key;

    // Check if the pressed key matches any of the buttons
    switch (keyPressed) {
        case '0':
            document.getElementById('button-0').click();
            break;
        case '1':
            document.getElementById('button-1').click();
            break;
        case '2':
            document.getElementById('button-2').click();
            break;
        case '3':
            document.getElementById('button-3').click();
            break;
        case '4':
            document.getElementById('button-4').click();
            break;
        case '5':
            document.getElementById('button-5').click();
            break;
        case '6':
            document.getElementById('button-6').click();
            break;
        case '7':
            document.getElementById('button-7').click();
            break;
        case '8':
            document.getElementById('button-8').click();
            break;
        case '9':
            document.getElementById('button-9').click();
            break;
        case '+':
            document.getElementById('button-plus').click();
            break;
        case '-':
            document.getElementById('button-minus').click();
            break;
        case '*':
            document.getElementById('button-multiply').click();
            break;
        case '/':
            document.getElementById('button-divide').click();
            break;
        case '(':
            document.getElementById('button-open-parenthesis').click();
            break;
        case ')':
            document.getElementById('button-close-parenthesis').click();
            break;
        case '.':
            document.getElementById('button-dot').click();
            break;
        case 'Enter':
            document.getElementById('calculate').click();
            break;
        case 'Backspace':
            document.getElementById('delete').click();
            break;
        case 'Escape':
            document.getElementById('clear').click();
            break;
        default:
            break;
    }
});



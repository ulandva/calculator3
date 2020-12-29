function plus(a, b) {
    return (a + b);
}

function minus(a, b) {
    return (a - b);
}

function umnojit(a, b) {
    return (a * b);
}

function razdelit(a, b) {
    return (a / b);

}

function sign() {
    let y = document.getElementById("oper").value;
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    a = parseInt(a);
    b = parseInt(b);
    let result;

    switch (y) {
        case 'plus':
            result = plus(a, b);
            break;

        case 'minus':
            result = minus(a, b);
            break;

        case 'umnojit':
            result = umnojit(a, b);
            break;

        case 'razdelit':
            result = razdelit(a, b);
            break;

    }
    document.getElementById('out').innerHTML = result;
}

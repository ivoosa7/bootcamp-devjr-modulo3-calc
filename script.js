function calc(operador){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    switch(operador){
        case '+': output = num1 + num2; break;
        case '-': output = num1 - num2; break;
        case '*': output = num1 * num2; break;
        case '/': if(num2 === 0){
                alert("Não é possível dividir por zero");
                }else{
                    output = num1 / num2;
                }
        break;
        default:
            alert("Operador inválido");
    }
    document.getElementById("output").value = output;

    var newHistory = "<div>" + num1 + "  " + operador + "  " + num2 + " = " + output + "</div>";

    document.getElementById("history").innerHTML = newHistory + document.getElementById("history").innerHTML;
}
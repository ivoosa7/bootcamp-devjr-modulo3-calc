function calc(operador){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    switch(operador){
        case '+':
            var somaoutput = num1 + num2;
            document.getElementById("output").value = somaoutput;
        break;
        case '-':
            var suboutput = num1 - num2;
            document.getElementById("output").value = suboutput;
        break;
        case '*':
            var multoutput = num1 * num2;
            document.getElementById("output").value = multoutput;
        break;
        case '/':
            if(num2 === 0){
                alert("Não é possível dividir por zero");
            }else{
                var dividiroutput = num1 / num2;
                document.getElementById("output").value = dividiroutput;
            }
        break;
        default:
            alert("Operador inválido");
    }
    //document.getElementById("output").value = output;
}
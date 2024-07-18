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

    var newHistory = "<p>" + num1 + "  " + operador + "  " + num2 + " = " + output + "</p>";
    var history = document.getElementById("history");

    history.innerHTML = newHistory + history.innerHTML;

    if(history.children.length > 10){ //vai pegar o tamanho de div que foi criado e se for maior que 10 vai entrar na lógica abaixo 
        history.removeChild(history.childNodes[10]); //Lógica que remove a div na posição 11 do array
    }
}
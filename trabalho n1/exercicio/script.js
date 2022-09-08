function calcularCPF(cpf){
    let total = 0;

    for (i=0;i<9;i++){
        total = total + ((10-i)*cpf[i]);
    }
        let resto = total % 11;

         segundoDigito = 11 - resto;

         valido = (String(cpf[9]) + String(cpf[10]) == String(primeiroDigito) + String(segundoDigito)) ;

        return valido;
    
}

$('#inputOla').click(
    function(){
        let cpfDigitado = document.getElementById("inputA").value;
        if (calcularCPF("05186944106")) {
        console.log("Valido");
        } else {
            console.log("Invalido");
        }

    }

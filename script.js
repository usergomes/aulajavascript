$('#btOla').click(
    function(){
        // cadastro=
        // {
    
        // //     'nome':  document.getElementById('inputnome').value,
        // //     'endereco':document.getElementById('inputndereco').value,
        // //     'email':document.getElementById('inputemail').value
        // // }
        calculadora=
    {
        'a':document.getElementById('inputA').value,
        'b':document.getElementById('inputB').value,
        'c':document.getElementById('inputC').value


        
    }
alert( parseInt(calculadora.a) + parseInt(calculadora.b) + parseInt(calculadora.c)) / 3;
if(media >= 7) {
    alert('você foi aprovado');
     } else {
        alert('você ficou de exame');


    }
    }
)

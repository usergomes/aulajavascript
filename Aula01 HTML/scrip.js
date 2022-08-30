function calcularDelta(a, b, c){
    let delta = b*b - (4*a*c)
    return delta
}

function calcularx1(a, b, delta){
    let x1 = (-1*b + Math.sqrt(delta)) / 2 * a;
    return x1;

}

function calcularx2(a, b, delta){
   let x2 = (-1*b - Math.sqrt(delta)) / 2 * a;
   return x2;
}

$('#inputOla').click(
    function(){
        let notas = [9,5,4];

        let nome = "guilherme";
        
         for (i=0;i<notas.length;i++){ 
            console.log(notas[i]);
         }

        for (i=0;i<nome.length;i++){ 
            console.log(nome[i]);
        }
        


        }

)

function pegarItem(item, valor){
    if ((item == "feijão") || (valor == 1)) {
        console.log(item + " valor: "+ valor);
    }

}
    
    



$('#btCalcular' ).click(
    function(){
       /*  aluno = {"nome":"Willian", "idade":18};
        aluno2 = {"nome":"Matheus","idade":19};

        ads = {aluno, aluno2};
 */
    produtos = 
    [
        {"nome":"arroz", "valor":10},
        {"nome":"arroz", "valor":12},
        {"nome":"feijão", "valor":10},
        {"nome":"ovo", "valor":1},

    ]
    for (i =0; i<= produtos.length-1 ; i++) {
        pegarItem(produtos[i].nome, produtos[i].valor);
    }

        /* console.log(ads[0].nome); //william
        console.log(ads[1].nome); //19 */

      
    }
);

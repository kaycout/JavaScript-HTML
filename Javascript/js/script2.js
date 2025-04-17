function cor(){
    document.body.style.backgroundColor="#300";
}

//document.body.onclick = cor;
document.getElementsByTagName("button")[0].onclick = function(){
    document.body.style.backgroundColor="#0f0";

}

function escolha(){
    let opcao = prompt("Digite: \n1-Azul\n2-Amarelo");
    if(opcao==1){
        document.body.style.backgroundColor="#00f";
    }
    else if(opcao==2){
        document.body.style.backgroundColor="#ff6";
    }
    else{
        document.body.style.backgroundColor="#ffff";
    }
}


//var nome = ""
//let sobrenome = ""

//if (10 > 20){
    //var x =10; varivel global
    //let y =10; varivel local
//}
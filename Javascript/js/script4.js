/* 
Estrutura de repetição:
 - For
 - While
 - Do While
Estruturas de iteração:
 - ForEach
 - Map
*/
/* Vamos criar vários botões de acordo com a quantidade inserida
pelo usuário
*/

function adicionarBotoes(){
    let qtd = prompt("Digite a quantidade de botões:");
    for (let i = 1 ; i <= qtd; i++){
        var btn = "<button>BTN US "+i+"</button>";
        document.getElementById("caixa").innerHTML+=btn;
    }
}

function mudaCor(r,g,b){
    document.body.style.backgroundColor=`rgb($(r),$(g),$(b))`
}

function gerarPaletaCores(){
    let tabela ="<table>";
    for(let linha = 1 ; linha <= 20 ; linha++){
        tabela+="<tr>";
        for(let coluna = 1 ; coluna <= 20 ; coluna++){
            let r = parseInt(Math.random()*255);
            let g = parseInt(Math.random()*255);
            let b = parseInt(Math.random()*255);
            tabela+=`<td style="background-color:rgb(${r},${g},${b})"> &nbsp; &nbsp; </td>`;
        }
        tabela+="</tr>";
    }
    tabela+="<table>";
    document.getElementById("caixa").innerHTML=tabela;

}

function operacoes(){
    let opcao = parseInt(prompt("Digite:\n1-Soma\n2-Subtrair\n3-multiplicar\n4-Dividir\n9-Sair"))
    while(opcao!=9){
        let  n1 = prompt("Digite um valor:");
        let  n2 = prompt("Digite outro valor:");
        switch(opcao){
            case 1:
                alert(n1+n2);
                break;
            case 2:
                alert(n1-n2);
                break;
            case 3:
                alert(n1*n2);
                break;
            case 4:
                alert(n1/n2);
                break;
            default:
                alert("Operação inexistente");
                break;
        }
        opcao = parseInt(prompt("Digite:\n1-Soma\n2-Subtrair\n3-multiplicar\n4-Dividir\n9-Sair"))
    }
}

/* comandos para criar os seguintes elementos:
//button: para o acionamento e chamada da função
//adiciona botoes.
//Adicionar o comando hr.
//caixa: que será um elemento div que receberá 
//os botões criados dinamicamente
//Estes elementos serão criados no momento em que a página
//carregar.
*/

const body = document.body;
const btnGerar = document.createElement("button");
btnGerar.setAttribute("onclick","adicionarBotoes()");
btnGerar.innerHTML="Gerar";
//adicionar o btnGerar no body 
body.append(btnGerar);

const btnPaleta = document.createElement("button");
btnPaleta.setAttribute("onclick","gerarPaletaCores()");
btnPaleta.innerHTML = "Gerar paleta de cores";
body.append(btnPaleta);

const btnOperacoes = document.createElement("button");
btnOperacoes.setAttribute("onclick","operacoes()");
btnOperacoes.innerHTML="Calcular";
body.append(btnOperacoes);


const hr = document.createElement("hr");
body.append(hr);
const caixa = document.createElement("div");
caixa.setAttribute("id","caixa");
body.append(caixa);
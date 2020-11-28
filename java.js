window.onload = function() {
    let botaoOK = document.querySelector("#botao");
    botaoOK.onclick = mostrar_nome_e_idade;
}

function mostrar_nome_e_idade () {
    let novadv = document.createElement("div");
    let nomeInput = document.querySelector("#nome");
    let idadeInput = document.querySelector("#idade");
    let novoTexto = document.createTextNode(`Olá ${nomeInput.value}, bem vindo ao meu site, pelo visto você tem ${idadeInput.value} anos.`);
    
    let dv1 = document.querySelector("#dv");
    novadv.appendChild(novoTexto);
    dv1.appendChild(novadv);
}

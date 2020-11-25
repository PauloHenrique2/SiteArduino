function mostrar_nome_e_idade () {
    let novadv = document.createElement("div");
    let nomeInput = document.querySelector("#nome");
    let novadv2 = document.createElement("div");
    let idadeInput = document.querySelector("#idade");
    let novoTexto = document.createTextNode(`Olá ${nomeInput.value}, bem vindo ao meu site, pelo visto você tem ${idadeInput.value} anos.`);

    novadv.appendChild(novoTexto);
    novadv2.appendChild(novoTexto);
    document.body.appendChild(novadv);
    document.body.appendChild(novadv2);

}

let botaoOK = document.querySelector("#botao");
botaoOK.onclick = mostrar_nome_e_idade;
const url = 'https://raw.githubusercontent.com/TamirisCeolin/ciencia-de-dados-3C/refs/heads/main/dados-globais.json';

async function visualizarInformacoesGlobais(){
    const res = await fetch(url);

    const dados = await res.json();

}

visualizarInformacoesGlobais();
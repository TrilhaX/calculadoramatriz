var resultados = [];
var m1, m2;

// Função para solicitar os multiplicadores m1 e m2 ao usuário
function solicitarMultiplicadores() {
    m1 = parseInt(prompt("Digite o valor de m1:"));
    m2 = parseInt(prompt("Digite o valor de m2:"));
}

// Função para iniciar o processo de descriptação
function iniciarDescriptacao() {
    // Solicita os multiplicadores m1 e m2
    solicitarMultiplicadores();

    // Solicita 50 números (25 para cada linha)
    for (var i = 0; i < 50; i++) {
        var numero = parseInt(prompt("Digite o " + (i + 1) + "º número:"));
        resultados.push(numero);
    }

    // Chama a função para processar os resultados
    processarResultados();
}

// Função para processar os resultados
function processarResultados() {
    // Verifica se temos exatamente 50 resultados
    if (resultados.length === 50) {
        // Separando os resultados em duas linhas de 25
        var linha1 = resultados.slice(0, 25);
        var linha2 = resultados.slice(25, 50);

        // Mapeando os resultados para letras e símbolos
        var mapeamento1 = linha1.map(function(num) {
            if (num === 27) return ' ';
            if (num >= 1 && num <= 26) return String.fromCharCode(64 + num);
            return '?';
        });

        var mapeamento2 = linha2.map(function(num) {
            if (num === 27) return ' ';
            if (num >= 1 && num <= 26) return String.fromCharCode(64 + num);
            return '?';
        });

        // Exibindo os resultados e frases descriptografadas em um alerta
        alert("Linha 1: " + linha1.join(" "));
        alert("Mapeamento 1: " + mapeamento1.join(" "));
        alert("Linha 2: " + linha2.join(" "));
        alert("Mapeamento 2: " + mapeamento2.join(" "));

        // Limpando o array para a próxima rodada
        resultados = [];

        // Solicitando novos valores de m1 e m2 para a próxima rodada
        iniciarDescriptacao();
    } else {
        alert("Por favor, digite exatamente 50 números.");
        resultados = []; // Limpa o array e reinicia o processo
        iniciarDescriptacao(); // Reinicia o processo de descriptação
    }
}

// Chama a função para iniciar o processo de descriptação ao carregar a página
iniciarDescriptacao();

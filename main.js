var resultados = [];
var m1, m2;

// Função para solicitar os multiplicadores m1 e m2
function solicitarMultiplicadores() {
    m1 = parseInt(prompt("Digite o valor de m1:"));
    m2 = parseInt(prompt("Digite o valor de m2:"));
}

// Função para calcular e armazenar os resultados
function descriptado(n1, n2) {
    var soma1 = n1 * m1;
    var soma2 = n2 * m2;
    var sub = soma1 + soma2;

    // Adicionando o resultado ao array
    resultados.push(sub);

    // Verificando se temos 50 resultados
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

        // Solicitando novos valores de m1 e m2
        solicitarMultiplicadores();
    }
}

// Exemplo de uso:
// Aqui você chamaria a função descriptado com valores n1 e n2
// por exemplo:
// descriptado(2, 3);
// descriptado(4, 5);

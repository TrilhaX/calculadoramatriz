var resultados = [];
var m1, m2;

// Função para calcular e armazenar os resultados
function descriptado(n1, n2, m1, m2) {
    var soma1 = n1 * m1;
    var soma2 = n2 * m2;
    var sub = soma1 + soma2;

    // Adicionando o resultado ao array
    resultados.push(sub);

    // Verificando se temos 50 resultados
    if (resultados.length === 25) {
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
        alert(linha1.join(" "));
        alert(mapeamento1.join(" "));
        alert(linha2.join(" "));
        alert(mapeamento2.join(" "));

        // Limpando o array para a próxima rodada
        resultados = [];

        // Solicitando novos valores de m1 e m2
        solicitarMultiplicadores();
    } else if (resultados.length == 51) {
        alert(mapeamento1.join(" ") + mapeamento2.join(" "))
        alert(linha1.join(" ") + linha2.join(" "))
    }

}

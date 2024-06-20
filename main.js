var resultados = [];
var m1, m2;

alert("Se não tiver 26 colunas o seu so clicar em ok na coluna 26, tanto no n1 quanto no n2")
// Função para calcular e armazenar os resultados
function descriptado(n1, n2, m1, m2) {
    var soma1 = n1 * m1;
    var soma2 = n2 * m2;
    var sub = soma1 + soma2;
    
    // Adicionando o resultado ao array
    resultados.push(sub);

    // Verificando se temos 50 resultados
    if (resultados.length === 26) {
        // Separando os resultados em duas linhas de 25
        var linha1 = resultados.slice(0, 26);
        var linha2 = resultados.slice(26, 0);

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
    } else if (resultados.length == 53) {
        alert(mapeamento1.join(" ") + mapeamento2.join(" "))
        alert(linha1.join(" ") + linha2.join(" "))
    }

}

// Função para solicitar os valores de n1 e n2
function solicitarValores(coluna) {
    var n1 = prompt(`Digite o valor de n1 da coluna ${coluna}:`);
    var n2 = prompt(`Digite o valor de n2 da coluna ${coluna}:`);

    // Convertendo os valores de string para números inteiros
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    // Chamando a função com os valores fornecidos pelo usuário
    descriptado(n1, n2, m1, m2);
}

// Solicitando os valores de m1 e m2 uma vez
function solicitarMultiplicadores() {
    m1 = prompt("Digite o valor de m1:");
    m2 = prompt("Digite o valor de m2:");

    // Convertendo os valores de string para números inteiros
    m1 = parseInt(m1);
    m2 = parseInt(m2);
}

function chave(a,b,c,d){
    let determinante = (a * c) + (b * d)
    alert(determinante)
    var n1 = prompt(`Digite o valor de n1 da coluna ${coluna}:`);
    var n2 = prompt(`Digite o valor de n2 da coluna ${coluna}:`);

    // Convertendo os valores de string para números inteiros
    n1 = parseInt(n1);
    n2 = parseInt(n2);
}
// Solicitando os multiplicadores pela primeira vez
chave(a,b,c,d);

// Exemplo de como chamar a função solicitarValores várias vezes
for (var i = 1; i <= 100; i++) {
    solicitarValores(i);
}

// Objeto contendo perguntas e respostas
const responses = {
    "Qual é o objetivo do jogo?": "O objetivo é...",
    "Quem é o personagem principal?": "O personagem principal é...",
    // Adicione mais perguntas e respostas conforme necessário
};

// Função para processar perguntas e fornecer respostas
function askQuestion(question) {
    if (responses.hasOwnProperty(question)) {
        return responses[question];
    } else {
        return "Desculpe, não entendi a pergunta.";
    }
}

// Exemplo de uso
const question = "Qual é o objetivo do jogo?";
const answer = askQuestion(question);
console.log("Pergunta: " + question);
console.log("Resposta: " + answer);
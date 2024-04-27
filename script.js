function askQuestion() {
    var question = document.getElementById('questionInput').value;
    var answer = getAnswer(question);
    document.getElementById('answer').innerHTML = answer;
}

function getAnswer(question) {
    // Lógica para retornar respostas com base na pergunta
    switch (question.toLowerCase()) {
        case "qual é o objetivo do jogo?":
            return "O objetivo do jogo é...";
        case "quem é o personagem principal?":
            return "O personagem principal é...";
        default:
            return "Desculpe, não entendi a pergunta.";
    }
}
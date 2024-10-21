const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "qual frequência você assiste filmes ?",
        alternativas: [
            {
                texto: "Com bastante frequência",
                afirmacao: "tem muita cultura e grande conhecimento no mundo do cinema !"
            },
            {
                texto: "Quase não assisto",
                afirmacao: "é ligada em outros assuntos e prioriza outros tipos de atividades !"
            }
        ]
    },
    {
        enunciado: "Destes gêneros, qual você prefere ?",
        alternativas: [
            {
                texto: "Animação",
                afirmacao: "gosta do mundo da fantasia e com espírito infantil !"
            },
            {
                texto: "Terror",
                afirmacao: "gosta de situações com adrenalina e que demonstra coragem"
            }
        ]
    },
    {
        enunciado: "Geralmente, prefere assistir filmes sozinho ou acompanhado ?",
        alternativas: [
            {
                texto: "Sozinho",
                afirmacao: "presta atenção nos detalhes e não gosta que os outros te façam perder o foco !"
            },
            {
                texto: "Acompanhado",
                afirmacao: "gosta de compartilhar as emoções com os que estão à sua volta !"
            }
        ]
    },
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você é uma pessoa que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

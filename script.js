// 1. Seleção dos elementos do HTML
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// 2. Lista de perguntas e opções do quiz
const perguntas = [
	{
    	enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    	alternativas: [
        	{
            	texto: "Isso é assustador!",
            	afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
        	},
        	{
            	texto: "Isso é maravilhoso!",
            	afirmacao: "Quis saber como usar IA no seu dia a dia."
        	}
    	]
	},
	{
    	enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    	alternativas: [
        	{
            	texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
            	afirmacao: "Conseguiu utilizar a IA como ferramenta prática para aprender e simplificar estudos do dia a dia."
        	},
        	{
            	texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
            	afirmacao: "Preferiu focar em métodos de pesquisa tradicionais e na troca de ideias com pessoas."
        	}
    	]
	},
	{
    	enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    	alternativas: [
        	{
            	texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
            	afirmacao: "Acredita que a inovação pode gerar novas oportunidades profissionais e capacitação."
        	},
        	{
            	texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
            	afirmacao: "Sua principal preocupação foi com o impacto social do desemprego causado pela automação."
        	}
    	]
	},
	{
    	enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    	alternativas: [
        	{
            	texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
            	afirmacao: "Decidiu expressar suas ideias manualmente, estimulando a criatividade autoral."
        	},
        	{
            	texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
            	afirmacao: "Aproveitou os geradores de imagem para dar vida rápida às suas ideias visuais."
        	}
    	]
	},
	{
    	enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    	alternativas: [
        	{
            	texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
            	afirmacao: "Entendeu que elaborar o comando certo para uma ferramenta já exige certo esforço."
        	},
        	{
            	texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
            	afirmacao: "Compreendeu a importância de revisar conteúdos gerados por máquinas e trazer sua visão humana ao resultado final."
        	}
    	]
	}
];

// 3. Controle do estado do quiz
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// 4. Funções de fluxo
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

function mostraAlternativas() {
	for (const alternativa of perguntaAtual.alternativas) {
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
	caixaPerguntas.textContent = "Em 2049...";
	textoResultado.textContent = historiaFinal;
	caixaAlternativas.textContent = "";
}

// 5. Inicialização
mostraPergunta();

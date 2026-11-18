
// =========================================
// CONFIGURAÇÕES
// =========================================

const MODO_PREVISAO = false; // Define como true para desbloquear todos os dias, false para seguir a data real

const STORAGE_KEY = "openedDays";

// =========================================
// CONTEÚDO DOS 24 DIAS
// =========================================

const surprises = [
  // 8 CARTAS
  {
    type: "carta",
    title: "Uma carta para ti",
    intro: "Há coisas que merecem ser lidas com calma.",
    reveal: "Quero que saibas que és uma das partes mais bonitas da minha vida. Mesmo nos dias mais simples, há qualquer coisa de especial em ter-te comigo. ❤️"
  },
  {
    type: "carta",
    title: "O meu lugar favorito",
    intro: "Tenho uma pequena confissão para te fazer.",
    reveal: "O meu lugar favorito não é uma cidade, uma casa ou um destino. És tu."
  },
  {
    type: "carta",
    title: "Se pudesse escolher",
    intro: "Fecha os olhos por um instante e imagina...",
    reveal: "Escolhia voltar a conhecer-te. Escolhia cada conversa, cada gargalhada e cada momento. Voltava a escolher-te, mesmo que tivesse de passar por tudo de novo, porque depois da tempestade vem a calmaria e tu és a minha calmaria."
  },
  {
    type: "carta",
    title: "Um detalhe teu",
    intro: "Há pequenos detalhes que nunca me passam despercebidos.",
    reveal: "Um detalhe teu é a forma de como me recebes e cuidas de mim. Isso faz-me sentir especial e amado, todos os dias."
  },
  {
    type: "carta",
    title: "Uma promessa",
    intro: "Não te prometo um mundo perfeito mas prometo-te te dar o mundo.",
    reveal: "Prometo continuar a aprender, a crescer e a cuidar daquilo que estamos a construir. Quero que sejamos sempre uma equipa. Prometo ser sempre o teu chato e silly, sem mudar nada de mim."
  },
  {
    type: "carta",
    title: "Para os dias difíceis",
    intro: "Guarda esta mensagem para quando precisares.",
    reveal: "Não tens de ser forte o tempo todo. Também podes ter dias maus, dúvidas e momentos difíceis. Quero estar ao teu lado em todos eles. Sabes que sou o teu diário, fala comigo, mesmo que seja difícil."
  },
  {
    type: "carta",
    title: "O que admiro em ti",
    intro: "Hoje quero lembrar-te de uma coisa.",
    reveal: "Admiro a pessoa que és, a tua maneira de ver o mundo e a forma como consegues tornar especiais até os momentos mais normais."
  },
  {
    type: "carta",
    title: "A última carta",
    intro: "Uma mensagem para guardares.",
    reveal: "Se há algo que quero que leves deste calendário, é isto: és importante para mim. Muito mais do que consigo explicar numa simples mensagem, tanto que fiz este calendário exlcusivamente para te agradar porque viste no tiktok hahaha."
  },

  // 5 QUIZZES
  {
    type: "quiz",
    title: "Quanto me conheces?",
    question: "Qual destas coisas escolheria para passar um dia perfeito contigo?",
    options: ["Valorant a dois", "Um dia tranquilo a ver  séries e a sermos goofy um com o outro", "hipoteticamente, um dia juntos em cuddle"],
    answer: 2,
    correct: "Acertaste! Embora goste de valorant e ficar contigo em call, queria muito estar literalmente ao teu lado. ❤️",
    incorrect: "Nice try, silly girl. Também gosto da tua resposta mas estar contigo supera qualquer coisa(até a minha faca favorita no valorant."
  },
  {
    type: "quiz",
    title: "A nossa história",
    question: "O que torna um momento verdadeiramente especial?",
    options: ["A forma de como conseguimos falar sobre as coisas", "nós, literalmente", "As piadas."],
    answer: 1,
    correct: "Exatamente. Nós tornamos cada momento especial, só estando um com o outro. ❤️",
    incorrect: "Concordo, as minhas piadas são as melhores, mas nós juntos somos mais engraçados. E sim, saber falar também é importante, mas sem nós não existia conversa."
  },
  {
    type: "quiz",
    title: "Escolhe por mim",
    question: "Se tivéssemos uma tarde livre, o que escolheria?",
    options: ["Ver-me a escrever num sítio calmo", "ver o pôr do sol numa praia", "ir a um oceanário e ver os peixes juntos"],
    answer: 1,
    correct: "Boa escolha! Parece que temos os mesmos gostos(somos feitos um para o outro).",
    incorrect: "What?? Sinceramente, amor... Parece que não me conheces(LOL), eu gostaria de ver o pôr do sol numa praia para poder comparar o brilho dos teus olhos com o do sol(o teu ganha sempre)."
  },
  {
    type: "quiz",
    title: "Uma escolha importante",
    question: "O que prefiro receber de ti?",
    options: ["Um come to mommy, come touch my tights", "Um texto teu", "Um amo-te meu good boy"],
    answer: 1,
    correct: "Acertaste. Apesar de serem todas umas ÓTIMAS OPÇÕES eu amo-te minha poeta desajeitada(adoro quando escreves fr).",
    incorrect: "BOA TENTATIVA, MAS PODES FAZER ISSO À MESMA THO HIHIHIHIHIHHIHIHIHI(queria um texto teu)."
  },
  {
    type: "quiz",
    title: "Última pergunta",
    question: "Se eu tivesse de escolher novamente, o que seria?",
    options: ["Escolher-te novamente", "Voltar no tempo", "Consertar o meu maior arrependimento"],
    answer: 0,
    correct: "Esta era fácil. Escolhia-te novamente, nesta vida e em todas as próximas. Sempre. ❤️",
    incorrect: "A resposta certa era escolher-te novamente. Sempre. Para mim o meu passado não existe mais, só o presente e o futuro contigo. ❤️"
  },

  // 4 JOGOS
  {
    type: "jogo",
    title: "Escolhe um envelope",
    intro: "Três envelopes. Uma pequena surpresa. Qual escolhes?",
    choices: [
      { label: "Envelope I", result: "Dentro deste envelope está um abraço daqueles que fazem o mundo parar." },
      { label: "Envelope II", result: "Ganhas uma skin ou algo que queiras sem discussões, só aceita o presente." },
      { label: "Envelope III", result: "Queen day. Tu escolhes o que tu quiseres e fazemos, literalmente anything." }
    ]
  },
  {
    type: "jogo",
    title: "Escolhe uma estrela",
    intro: "Cada estrela guarda uma mensagem secreta.",
    choices: [
      { label: "Estrela dourada", result: "És a minha luz nos dias mais cinzentos." },
      { label: "Estrela prateada", result: "Há momentos contigo que gostava de guardar para sempre." },
      { label: "Estrela vermelha", result: "O meu coração tem uma pessoa favorita. És tu." }
    ]
  },
  {
    type: "jogo",
    title: "Uma pequena escolha. E também, Feliz 2 meses de namoro, meu amor.",
    intro: "Escolhe o teu próximo plano comigo, neste dia especial.",
    choices: [
      { label: "Cinema", result: "Está combinado: cinema e a melhor companhia, e sim, pode ser um romance." },
      { label: "Valo date", result: "Podemos nos aventurar nas ranqueadas e descobrir quem fica tiltado mais depressa. quem perder manda uma foto" },
      { label: "Noite de conversas", result: "Uma noite de conversas. Pode ser verdade ou desafio, ou apenas responder perguntas difíceis e sillys, tal como eu :P." }
    ]
  },
  {
    type: "jogo",
    title: "O presente escondido",
    intro: "Escolhe uma caixa. Não sabes o que está lá dentro...",
    choices: [
      { label: "Caixa pequena", result: "Um bilhete com uma frase: Eu amo-te Ana Maria. Hoje, amanhã e sempre." },
      { label: "Caixa média", result: "Um dia inteiro reservado para nós os dois." },
      { label: "Caixa grande", result: "Uma promessa: criar mais memórias bonitas contigo." }
    ]
  },

  // 4 DESAFIOS
  {
    type: "desafio",
    title: "Desafio do dia",
    challenge: "Envia-me uma fotografia tua . Quero guardar mais uma.",
    symbol: "📸"
  },
  {
    type: "desafio",
    title: "Um momento só nosso",
    challenge: "Hoje, escolhe uma música que te faça lembrar de nós e partilha-a comigo.",
    symbol: "♫"
  },
  {
    type: "desafio",
    title: "Pequeno gesto",
    challenge: "Hoje, diz-me uma coisa de que gostas em nós. Pode ser algo simples. Não sei não está incluído.",
    symbol: "♡"
  },
  {
    type: "desafio",
    title: "Missão especial",
    challenge: "Guarda um momento bonito de hoje. Pode ser uma fotografia, uma mensagem ou uma memória.",
    symbol: "✦"
  },

  // 3 SURPRESAS ESPECIAIS
  {
    type: "especial",
    title: "Uma surpresa especial",
    intro: "Nem todos os presentes precisam de estar embrulhados.",
    reveal: "O teu presente de hoje é eu te dar uma memória nossa. Mas tens de pedir com jeitinho. ❤️",
    button: "Revelar a surpresa"
  },
  {
    type: "especial",
    title: "Um desejo",
    intro: "Hoje podes pedir-me uma coisa.",
    reveal: "Tens direito a escolher uma atividade para fazermos juntos. Sem desculpas, não importa se eu não gostar, hoje tu mandas. Este desejo é teu.",
    button: "Descobrir o meu desejo"
  },
  {
    type: "especial",
    title: "O meu último presente ❤️",
    intro: "Guardei algo muito especial para este último dia.",
    reveal: `Ana,

Chegámos ao último dia deste calendário.

Cada uma das 24 surpresas foi pensada em ti. Queria encontrar uma forma diferente de te fazer sorrir e de te lembrar o quanto és especial para mim.

Não quero que este seja apenas o fim de um calendário. Quero que seja mais uma memória bonita que construímos juntos.

Obrigado por seres tu, por fazeres parte da minha vida e por me dares tantos motivos para sorrir.

Se pudesse voltar ao primeiro dia, voltaria a preparar tudo de novo, só para te surpreender mais uma vez.

Amo-te, Ana. Hoje e em todos os dias que ainda estão por vir.

Com amor, o teu silly man. ❤️`,
    button: "Ler a minha mensagem"
}
  

];

// =========================================
// ESTADO DO CALENDÁRIO
// =========================================

let openedDays = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

function saveOpenedDays() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(openedDays));
}

function isDayUnlocked(day) {
  if (MODO_PREVISAO) return true;

  const today = new Date();
  const unlockDate = new Date(2026, 11, day, 0, 0, 0);

  return today >= unlockDate;
}

// =========================================
// CONTAGEM DECRESCENTE
// =========================================

function updateCountdown() {
  const countdown = document.getElementById("countdown");
  if (!countdown) return;

  const targetDate = new Date(2026, 11, 1, 0, 0, 0);
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    countdown.textContent = "O nosso dezembro chegou ❤️";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  countdown.textContent =
    `${days} dias · ${hours} horas · ${minutes} minutos · ${seconds} segundos`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// =========================================
// PARTÍCULAS
// =========================================

function createParticles() {
  const container =
    document.getElementById("particles") ||
    document.querySelector(".particles");

  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < 35; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    particle.style.animationDuration = `${8 + Math.random() * 12}s`;

    container.appendChild(particle);
  }
}

createParticles();

// =========================================
// BOTÃO DE ENTRADA
// =========================================

const enterButton = document.getElementById("enterButton");

if (enterButton) {
  enterButton.addEventListener("click", () => {
    document.getElementById("calendar")?.scrollIntoView({
      behavior: "smooth"
    });
  });
}

// =========================================
// CRIAR CALENDÁRIO
// =========================================

const calendarGrid = document.getElementById("calendarGrid");

function createCalendar() {
  if (!calendarGrid) return;

  calendarGrid.innerHTML = "";

  for (let day = 1; day <= 24; day++) {
    const unlocked = isDayUnlocked(day);
    const opened = openedDays.includes(day);

    const door = document.createElement("button");
    door.className = "calendar-door";

    if (opened) door.classList.add("opened");
    if (!unlocked) door.classList.add("locked");

    door.innerHTML = `
      <span class="door-number">${String(day).padStart(2, "0")}</span>
      <span class="door-symbol">${opened ? "♥" : unlocked ? "✦" : "🔒"}</span>
      <span class="door-label">${opened ? "Aberto" : unlocked ? "Descobrir" : "Em breve"}</span>
    `;

    door.disabled = !unlocked;

    if (unlocked) {
      door.addEventListener("click", () => openSurprise(day));
    }

    calendarGrid.appendChild(door);
  }
}

// =========================================
// ELEMENTOS DA JANELA
// =========================================

const surpriseOverlay = document.getElementById("surpriseOverlay");

// =========================================
// EFEITO DE CELEBRAÇÃO
// =========================================

function celebrate() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const particleCount = 32;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("span");

    particle.className = "celebration-particle";

    const angle = (Math.PI * 2 * i) / particleCount;
    const distance = 65 + Math.random() * 150;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    particle.style.setProperty("--x", `${x}px`);
    particle.style.setProperty("--y", `${y}px`);
    particle.style.setProperty(
      "--duration",
      `${0.8 + Math.random() * 0.8}s`
    );
    particle.style.setProperty(
      "--delay",
      `${Math.random() * 0.15}s`
    );

    document.body.appendChild(particle);

    particle.addEventListener("animationend", () => {
      particle.remove();
    }, { once: true });
  }
}

const closeModal = document.getElementById("closeModal");
const modalDay = document.getElementById("modalDay");
const surpriseContent = document.getElementById("surpriseContent");

// =========================================
// MOSTRAR CONTEÚDO
// =========================================

function renderExperience(day) {
  const surprise = surprises[day - 1];

  if (!surprise || !surpriseContent) return;

  surpriseContent.innerHTML = "";

  if (surprise.type === "carta") {
    surpriseContent.innerHTML = `
      <span class="experience-type">Uma carta para ti</span>
      <h2 class="experience-title">${surprise.title}</h2>
      <p class="experience-text">${surprise.intro}</p>
      <button class="experience-button" id="revealButton">Abrir a carta</button>
      <div class="experience-reveal" id="experienceReveal">
        ${surprise.reveal}
      </div>
    `;

    document.getElementById("revealButton").addEventListener("click", () => {
      document.getElementById("experienceReveal").classList.add("visible");
      document.getElementById("revealButton").textContent = "Carta aberta ♥";
    });
  }


if (surprise.type === "quiz") {
  surpriseContent.innerHTML = `
    <span class="experience-type">Um pequeno desafio</span>
    <h2 class="experience-title">${surprise.title}</h2>
    <p class="experience-text">${surprise.question}</p>

    <div class="quiz-options">
      ${surprise.options.map((option, index) => `
        <button class="quiz-option" data-answer="${index}">
          <span>${String.fromCharCode(65 + index)}.</span>
          ${option}
        </button>
      `).join("")}
    </div>

    <p class="quiz-feedback" id="quizFeedback"></p>
    
  `;

  document.querySelectorAll(".quiz-option").forEach(button => {
    button.addEventListener("click", () => {
      const selected = Number(button.dataset.answer);
      const feedback = document.getElementById("quizFeedback");
      const correctButton = document.querySelector(
        `.quiz-option[data-answer="${surprise.answer}"]`
      );

      document.querySelectorAll(".quiz-option").forEach(option => {
        option.disabled = true;
      });

      if (selected === surprise.answer) {
        button.classList.add("correct-answer");
        feedback.className = "quiz-feedback success";
        feedback.textContent = surprise.correct;
      } else {
        button.classList.add("wrong-answer");
        correctButton?.classList.add("correct-answer");
        feedback.className = "quiz-feedback try-again";
        feedback.textContent = surprise.incorrect;
      }
    });
  });
}


 
if (surprise.type === "jogo") {
  surpriseContent.innerHTML = `
    <span class="experience-type">Escolhe o teu destino</span>
    <h2 class="experience-title">${surprise.title}</h2>
    <p class="experience-text">${surprise.intro}</p>

    <div class="game-choices">
      ${surprise.choices.map((choice, index) => `
        <button class="game-card" data-choice="${index}">
          <span class="game-card-symbol">✧</span>
          <span class="game-card-label">${choice.label}</span>
        </button>
      `).join("")}
    </div>

    <div id="gameResult"></div>
    celebrate();
  `;

  document.querySelectorAll(".game-card").forEach(button => {
    button.addEventListener("click", () => {
      const selected = Number(button.dataset.choice);
      const result = document.getElementById("gameResult");

      document.querySelectorAll(".game-card").forEach(card => {
        card.disabled = true;
        card.classList.remove("selected");
      });

      button.classList.add("selected");

      result.innerHTML = `
        <div class="game-result">
          <span class="experience-type">A tua surpresa</span>
          ${surprise.choices[selected].result}
          <div style="margin-top: 14px; color: #c9a66b;">♥</div>
        </div>
      `;
    });
  });
}


  if (surprise.type === "desafio") {
    surpriseContent.innerHTML = `
      <span class="experience-type">O teu desafio</span>
      <h2 class="experience-title">${surprise.title}</h2>
      <div class="challenge-card">
        <span class="challenge-symbol">${surprise.symbol}</span>
        <p class="experience-text">${surprise.challenge}</p>
      </div>
      <button class="experience-button" id="acceptChallenge">Aceito o desafio</button>
      <p class="completion-message" id="challengeFeedback"></p>
    `;

    document.getElementById("acceptChallenge").addEventListener("click", () => {
      document.getElementById("challengeFeedback").textContent =
        "DESAFIO ACEITE ♥";
        

      document.getElementById("acceptChallenge").textContent = "Combinado!";
    });
    document.getElementById("acceptChallenge").disabled = true;
  }

  if (surprise.type === "especial") {
    surpriseContent.innerHTML = `
      <span class="experience-type">Uma surpresa especial</span>
      <h2 class="experience-title">${surprise.title}</h2>
      <div class="special-card">
        <span class="special-symbol">✧</span>
        <p class="experience-text">${surprise.intro}</p>
      </div>
      <button class="experience-button" id="specialReveal">${surprise.button}</button>
      <div class="experience-reveal" id="specialMessage">
        ${surprise.reveal}
      </div>
    `;

    document.getElementById("specialReveal").addEventListener("click", () => {
      document.getElementById("specialMessage").classList.add("visible");
      document.getElementById("specialReveal").textContent = "Surpresa revelada ♥";
    });
  }
}

// =========================================
// ABRIR UM DIA
// =========================================


function openSurprise(day) {
  if (!isDayUnlocked(day)) return;

  modalDay.textContent = `DIA ${String(day).padStart(2, "0")}`;

  renderExperience(day);

  if (!openedDays.includes(day)) {
    openedDays.push(day);
    saveOpenedDays();
  }

  createCalendar();

  surpriseOverlay.classList.remove("active");

  // Reiniciar a animação de entrada
  void surpriseOverlay.offsetWidth;

  surpriseOverlay.classList.add("active");
}


// =========================================
// FECHAR JANELA
// =========================================

function closeSurprise() {
  surpriseOverlay?.classList.remove("active");
}

closeModal?.addEventListener("click", closeSurprise);

surpriseOverlay?.addEventListener("click", event => {
  if (event.target === surpriseOverlay) {
    closeSurprise();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeSurprise();
  }
});

// =========================================
// INICIAR
// =========================================

createCalendar();

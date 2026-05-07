const WORDS = [
  "BANANA",
  "ABACAXI",
  "COMPUTADOR",
  "PROGRAMACAO",
  "JAVASCRIPT",
  "ESTUDANTE",
  "BICICLETA",
  "ELEFANTE",
  "BIBLIOTECA",
  "TECLADO",
  "MONITOR",
  "CADERNO",
  "BRASIL",
  "ESCOLA",
  "FUTEBOL",
  "GIRASSOL",
  "CHOCOLATE",
  "CACHORRO",
  "GATO",
  "AMIZADE",
  "ABRACO",
  "ACORDEAO",
  "ACUCAR",
  "ADVOGADO",
  "AEROPORTO",
  "AFIADO",
  "AGUA",
  "ALFACE",
  "ALGORITMO",
  "ALMOCO",
  "AMENDOIM",
  "AMOR",
  "ANCORA",
  "ANEL",
  "ANGULO",
  "ANIVERSARIO",
  "APLICATIVO",
  "ARANHA",
  "ARCOIRIS",
  "ARMAZEM",
  "ARQUITETO",
  "ARTESANATO",
  "ASTRONOMIA",
  "ATLETA",
  "AVENTURA",
  "AZULEJO",
  "BACALHAU",
  "BALAO",
  "BALEIA",
  "BANDEIRA",
  "BARBEIRO",
  "BATALHA",
  "BEBIDA",
  "BEIJO",
  "BISCOITO",
  "BOLACHA",
  "BOMBEIRO",
  "BORBOLETA",
  "BRINQUEDO",
  "BROCOLIS",
  "CABIDE",
  "CADEADO",
  "CADEIRA",
  "CAFUNE",
  "CAIXA",
  "CALENDARIO",
  "CAMINHAO",
  "CAMPANHA",
  "CANETA",
  "CANGURU",
  "CAPACETE",
  "CAPITAO",
  "CARAMELO",
  "CARANGUEJO",
  "CARBONO",
  "CARTEIRA",
  "CARVALHO",
  "CASTELO",
  "CEBOLA",
  "CELEIRO",
  "CEREJA",
  "CIDADE",
  "CINEMA",
  "CIRURGIA",
  "CLARINETE",
  "CLIMA",
  "COELHO",
  "COGUMELO",
  "COLHER",
  "COPO",
  "CORACAO",
  "CORREDOR",
  "COSTUREIRA",
  "COTIDIANO",
  "CRIANCA",
  "CROCODILO",
  "CURIOSIDADE",
  "DADO",
  "DANCA",
  "DENTISTA",
  "DESENHO",
  "DESERTO",
  "DICIONARIO",
  "DINHEIRO",
  "DINOSSAURO",
  "DIRETOR",
  "DIVERSAO",
  "ECLIPSE",
  "ECONOMIA",
  "EDIFICIO",
  "EFEITO",
  "ELEVADOR",
  "EMOCAO",
  "ENERGIA",
  "ENGENHEIRO",
  "ENIGMA",
  "ENVELOPE",
  "EQUILIBRIO",
  "ESCADA",
  "ESCORPIAO",
  "ESCRITORIO",
  "ESPONJA",
  "ESQUADRAO",
  "ESTACAO",
  "ESTRELA",
  "ESTRADA",
  "FAMILIA",
  "FANTASIA",
  "FARMACIA",
  "FAROFA",
  "FERRAMENTA",
  "FERROVIA",
  "FESTIVAL",
  "FILME",
  "FISICA",
  "FLAUTA",
  "FLORISTA",
  "FOGUETE",
  "FOLCLORE",
  "FOTOGRAFIA",
  "FRAMBOESA",
  "FRANGO",
  "FRIO",
  "FRONTEIRA",
  "FRUTA",
  "FUNCAO",
  "GALAXIA",
  "GARRAFA",
  "GELADEIRA",
  "GELEIA",
  "GEOMETRIA",
  "GIRINO",
  "GLOBOS",
  "GOIABA",
  "GOVERNADOR",
  "GRAVIDADE",
  "GUARDANAPO",
  "GUARDACHUVA",
  "GUITARRA",
  "HAMBURGUER",
  "HARMONIA",
  "HELICOPTERO",
  "HISTORIA",
  "HORTA",
  "HOSPITAL",
  "IDENTIDADE",
  "IGREJA",
  "ILHA",
  "IMAGINACAO",
  "IMPRESSORA",
  "INTERNET",
  "INVESTIGACAO",
  "JANELA",
  "JARDIM",
  "JORNAL",
  "LABIRINTO",
  "LAGARTIXA",
  "LAMPADA",
  "LARANJA",
  "LEGENDA",
  "LEITURA",
  "LIMONADA",
  "LINGUAGEM",
  "LIVRARIA",
  "LUA",
  "MACHADO",
  "MADEIRA",
  "MAGICA",
  "MALABARISMO",
  "MAMIFERO",
  "MARATONA",
  "MARAVILHA",
  "MARINHEIRO",
  "MARMELADA",
  "MASCARA",
  "MATEMATICA",
  "MEDALHA",
  "MEDITACAO",
  "MELANCIA",
  "MENSAGEM",
  "MERGULHO",
  "METEORO",
  "MICROFONE",
  "MISTERIO",
  "MONTANHA",
  "MORANGO",
  "MOTO",
  "MUSICA",
  "NAVEGACAO",
  "NEVE",
  "NOTEBOOK",
  "NOVIDADE",
  "OCEANO",
  "OFICINA",
  "OLIMPIADA",
  "ONDA",
  "ORQUESTRA",
  "OURO",
  "PAGINA",
  "PAISAGEM",
  "PALAVRA",
  "PANQUECA",
  "PAPEL",
  "PARALELEPIPEDO",
  "PASSARINHO",
  "PATO",
  "PEDREIRO",
  "PENSAMENTO",
  "PERFUME",
  "PESCADOR",
  "PESO",
  "PIMENTA",
  "PIRAMIDE",
  "PLANETA",
  "PLANTACAO",
  "POESIA",
  "POLTRONA",
  "PONTE",
  "PORCELANA",
  "PORTUGUES",
  "PRACA",
  "PRAIA",
  "PRESENTE",
  "PRIMAVERA",
  "PROFESSOR",
  "QUEIJO",
  "QUENTE",
  "QUIMICA",
  "RAPOSA",
  "RECEITA",
  "RELAMPAGO",
  "RELATORIO",
  "RELIGIAO",
  "RELOGIO",
  "REPUBLICA",
  "RESPOSTA",
  "RESTAURANTE",
  "RINOCERONTE",
  "ROBO",
  "RODOVIA",
  "SABONETE",
  "SALA",
  "SALADA",
  "SANDUICHE",
  "SAPATO",
  "SATELITE",
  "SAUDADE",
  "SEGURANCA",
  "SEMANA",
  "SEREIA",
  "SILENCIO",
  "SISTEMA",
  "SORRISO",
  "SUSTENTAVEL",
  "TABULEIRO",
  "TAMANDUA",
  "TAMARINDO",
  "TANGERINA",
  "TARTARUGA",
  "TEATRO",
  "TECNOLOGIA",
  "TEMPO",
  "TESOURO",
  "TIGRE",
  "TINTA",
  "TRAVESSEIRO",
  "TRIANGULO",
  "TROFEU",
  "TROMPETE",
  "TURISMO",
  "UNIVERSO",
  "URSO",
  "VENTILADOR",
  "VERAO",
  "VIAGEM",
  "VIOLINO",
  "VITAMINA",
  "XADREZ",
  "XICARA",
  "ZEBRA",
  "ZOOLOGICO",
];

const MAX_ERRORS = 6;
const BODY_PART_IDS = ["part-head", "part-body", "part-armL", "part-armR", "part-legL", "part-legR"];
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const $ = (sel) => document.querySelector(sel);

const elWordSlots = $("#wordSlots");
const elWordMeta = $("#wordMeta");
const elErrors = $("#errorsCount");
const elRemaining = $("#remainingCount");
const elMaxErrors = $("#maxErrors");
const elStatus = $("#status");
const elKeyboard = $("#keyboard");
const elUsedLetters = $("#usedLetters");

const elLetterForm = $("#letterForm");
const elLetterInput = $("#letterInput");
const elWordForm = $("#wordForm");
const elWordGuessInput = $("#wordGuessInput");
const btnNewGame = $("#btnNewGame");
const btnClearUsed = $("#btnClearUsed");
const btnResetStats = $("#btnResetStats");
const elHistoryList = $("#historyList");
const elWLRatio = $("#wlRatio");
const elWinPct = $("#winPct");
const elAvgAttemptsWin = $("#avgAttemptsWin");
const elPointsValue = $("#pointsValue");

const tabButtons = Array.from(document.querySelectorAll("[data-tab]"));
const secHangman = $("#hangman");
const secCasino = $("#casino");
const secShop = $("#shop");

// Cassino
const elSlotReels = $("#slotReels");
const elSlotBet = $("#slotBet");
const btnSlotSpin = $("#btnSlotSpin");
const elSlotMsg = $("#slotMsg");

const elBjBet = $("#bjBet");
const btnBjDeal = $("#btnBjDeal");
const btnBjHit = $("#btnBjHit");
const btnBjStand = $("#btnBjStand");
const elBjDealer = $("#bjDealer");
const elBjPlayer = $("#bjPlayer");
const elBjDealerScore = $("#bjDealerScore");
const elBjPlayerScore = $("#bjPlayerScore");
const elBjMsg = $("#bjMsg");

const elRoulType = $("#roulType");
const elRoulParity = $("#roulParity");
const elRoulNumber = $("#roulNumber");
const elRoulColor = $("#roulColor");
const elRoulBet = $("#roulBet");
const btnRoulSpin = $("#btnRoulSpin");
const elRoulMsg = $("#roulMsg");
const elRouletteResult = $("#rouletteResult");

// Loja
const elShopGrid = $("#shopGrid");
const btnResetCosmetics = $("#btnResetCosmetics");

let secret = "";
let revealed = [];
let used = new Map(); // letter -> "good"|"bad"
let errors = 0;
let locked = false;
let wordGuessMode = false;
let attempts = 0;

const PROFILE_KEY = "hangman_profile_v1";

function loadProfile() {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return { points: 0, owned: [], activeBg: null };
    const p = JSON.parse(raw);
    return {
      points: Number(p?.points) || 0,
      owned: Array.isArray(p?.owned) ? p.owned : [],
      activeBg: typeof p?.activeBg === "string" ? p.activeBg : null,
    };
  } catch {
    return { points: 0, owned: [], activeBg: null };
  }
}

function saveProfile(p) {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(p));
}

function setPoints(points) {
  const p = loadProfile();
  p.points = Math.max(0, Math.floor(points));
  saveProfile(p);
  renderPoints();
}

function addPoints(delta) {
  const p = loadProfile();
  p.points = Math.max(0, Math.floor((Number(p.points) || 0) + Number(delta)));
  saveProfile(p);
  renderPoints();
  return p.points;
}

function getPoints() {
  return loadProfile().points || 0;
}

function renderPoints() {
  if (!elPointsValue) return;
  elPointsValue.textContent = String(getPoints());
}

function awardWinPoints(finish) {
  const remaining = Math.max(0, MAX_ERRORS - errors);
  let pts = 80 + remaining * 20;
  if (finish === "word") pts += 30;

  const extraAttempts = Math.max(0, attempts - 3);
  pts -= extraAttempts * 5;

  pts = Math.max(25, Math.floor(pts));
  addPoints(pts);
  return pts;
}

function normalizeText(s) {
  return String(s || "")
    .trim()
    .toUpperCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function pickWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

const STORAGE_KEY = "hangman_stats_v1";

function loadStats() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { games: [] };
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.games)) return { games: [] };
    return parsed;
  } catch {
    return { games: [] };
  }
}

function saveStats(stats) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

function formatDate(ts) {
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date(ts));
  } catch {
    return new Date(ts).toLocaleString();
  }
}

function computeAggregates(games) {
  const wins = games.filter((g) => g.result === "win").length;
  const losses = games.filter((g) => g.result === "loss").length;
  const total = games.length;
  const winPct = total ? Math.round((wins / total) * 100) : 0;

  const winAttempts = games.filter((g) => g.result === "win").map((g) => Number(g.attempts) || 0);
  const avgAttemptsWin = winAttempts.length
    ? (winAttempts.reduce((a, b) => a + b, 0) / winAttempts.length).toFixed(1)
    : null;

  return { wins, losses, total, winPct, avgAttemptsWin };
}

function renderHistory() {
  if (!elHistoryList) return;

  const stats = loadStats();
  const games = stats.games || [];
  const { wins, losses, winPct, avgAttemptsWin } = computeAggregates(games);

  if (elWLRatio) elWLRatio.textContent = `${wins} / ${losses}`;
  if (elWinPct) elWinPct.textContent = `${winPct}%`;
  if (elAvgAttemptsWin) elAvgAttemptsWin.textContent = avgAttemptsWin ?? "-";

  elHistoryList.innerHTML = "";

  const last = [...games].slice(-12).reverse();
  if (last.length === 0) {
    const empty = document.createElement("div");
    empty.className = "history-item";
    empty.textContent = "Sem partidas ainda. Jogue para preencher o histórico.";
    elHistoryList.appendChild(empty);
    return;
  }

  for (const g of last) {
    const item = document.createElement("div");
    item.className = "history-item";

    const left = document.createElement("div");
    left.className = "history-left";

    const word = document.createElement("div");
    word.className = "history-word";
    word.textContent = g.word || "(sem palavra)";
    left.appendChild(word);

    const meta = document.createElement("div");
    meta.className = "history-meta";
    const pts = typeof g.pointsEarned === "number" ? ` • +${g.pointsEarned} pts` : "";
    meta.textContent = `${formatDate(g.endedAt)} • erros ${g.errors}/${MAX_ERRORS} • tentativas ${g.attempts ?? g.attempt ?? 0}${pts}`;
    left.appendChild(meta);

    const right = document.createElement("div");
    right.className = "history-right";

    const badge = document.createElement("span");
    badge.className = `badge ${g.result === "win" ? "ok" : "bad"}`;
    badge.textContent = g.result === "win" ? "VITÓRIA" : "DERROTA";
    right.appendChild(badge);

    const small = document.createElement("span");
    small.className = "small";
    small.textContent = g.finish === "word" ? "chute" : "letras";
    right.appendChild(small);

    item.appendChild(left);
    item.appendChild(right);
    elHistoryList.appendChild(item);
  }
}

function recordGame(result, finish, pointsEarned = 0) {
  const stats = loadStats();
  const entry = {
    word: secret,
    result, // "win" | "loss"
    finish, // "letters" | "word"
    attempts,
    errors,
    pointsEarned: Number(pointsEarned) || 0,
    endedAt: Date.now(),
  };
  stats.games = Array.isArray(stats.games) ? stats.games : [];
  stats.games.push(entry);
  saveStats(stats);
  renderHistory();
}

function setStatus(message, kind = "neutral") {
  elStatus.className = `status ${kind}`;
  elStatus.textContent = message;
}

function renderWord() {
  elWordSlots.innerHTML = "";

  for (let i = 0; i < secret.length; i++) {
    const ch = secret[i];
    const slot = document.createElement("div");

    if (ch === " ") {
      slot.className = "slot space";
      slot.textContent = "";
    } else {
      slot.className = `slot ${revealed[i] ? "revealed" : ""}`;
      slot.textContent = revealed[i] ? ch : "";
      slot.setAttribute("aria-label", revealed[i] ? `Letra ${ch}` : "Letra oculta");
    }

    elWordSlots.appendChild(slot);
  }

  const lettersCount = secret.replace(/ /g, "").length;
  elWordMeta.textContent = `A palavra tem ${lettersCount} letra(s).`;
}

function renderUsed() {
  elUsedLetters.innerHTML = "";
  const entries = Array.from(used.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  for (const [letter, kind] of entries) {
    const tag = document.createElement("span");
    tag.className = `tag ${kind === "good" ? "good" : "bad"}`;
    tag.textContent = letter;
    elUsedLetters.appendChild(tag);
  }
}

function renderKeyboard() {
  elKeyboard.innerHTML = "";

  for (const letter of LETTERS) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "key";
    btn.textContent = letter;
    btn.dataset.letter = letter;

    const kind = used.get(letter);
    if (kind) btn.classList.add(kind);

    btn.disabled = locked || used.has(letter);

    btn.addEventListener("click", () => {
      handleLetterGuess(letter);
      elLetterInput.focus();
    });

    elKeyboard.appendChild(btn);
  }
}

function renderHangman() {
  for (let i = 0; i < BODY_PART_IDS.length; i++) {
    const el = document.getElementById(BODY_PART_IDS[i]);
    if (!el) continue;
    el.classList.toggle("hidden", i >= errors);
  }
}

function updateStats() {
  elErrors.textContent = String(errors);
  elRemaining.textContent = String(Math.max(0, MAX_ERRORS - errors));
}

function isWin() {
  for (let i = 0; i < secret.length; i++) {
    const ch = secret[i];
    if (ch !== " " && !revealed[i]) return false;
  }
  return true;
}

function lockGame(message, kind) {
  locked = true;
  elLetterInput.disabled = true;
  elWordGuessInput.disabled = true;
  elLetterForm.querySelector("button[type='submit']").disabled = true;
  elWordForm.querySelector("button[type='submit']").disabled = true;
  setStatus(message, kind);
  renderKeyboard();
}

function setWordGuessMode(enabled) {
  wordGuessMode = enabled;
  if (locked) return;

  elLetterInput.disabled = enabled;
  elLetterForm.querySelector("button[type='submit']").disabled = enabled;
  renderKeyboard();

  if (enabled) {
    setStatus("Modo chute de palavra: letras desativadas temporariamente.", "neutral");
  } else {
    setStatus("Modo letras: você pode tentar letras novamente.", "neutral");
  }
}

function wrongAttempt(message, finish = "letters") {
  errors += 1;
  renderHangman();
  updateStats();

  if (errors >= MAX_ERRORS) {
    revealed = secret.split("").map((ch) => ch !== " ");
    renderWord();
    recordGame("loss", finish);
    lockGame(`Você perdeu! A palavra era: ${secret}`, "bad");
    return;
  }

  setStatus(message, "bad");
}

function handleLetterGuess(raw) {
  if (locked) return;
  if (wordGuessMode) return;

  const guess = normalizeText(raw);
  if (!/^[A-Z]$/.test(guess)) {
    setStatus("Digite uma única letra (A-Z).", "neutral");
    return;
  }

  if (used.has(guess)) {
    setStatus(`Você já tentou a letra ${guess}.`, "neutral");
    return;
  }

  attempts += 1;

  let hit = false;
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess) {
      revealed[i] = true;
      hit = true;
    }
  }

  used.set(guess, hit ? "good" : "bad");

  renderWord();
  renderUsed();
  renderKeyboard();

  if (hit) {
    if (isWin()) {
      const pts = awardWinPoints("letters");
      recordGame("win", "letters", pts);
      lockGame("Você venceu! Palavra completa.", "ok");
    } else {
      setStatus(`Boa! A letra ${guess} existe.`, "ok");
    }
  } else {
    wrongAttempt(`Ops! A letra ${guess} não existe.`, "letters");
  }
}

function handleWordGuess(raw) {
  if (locked) return;

  const guess = normalizeText(raw);
  if (!guess) {
    setStatus("Digite uma palavra para chutar.", "neutral");
    return;
  }

  attempts += 1;

  if (guess === secret) {
    revealed = secret.split("").map((ch) => ch !== " ");
    renderWord();
    const pts = awardWinPoints("word");
    recordGame("win", "word", pts);
    lockGame("Você venceu! Acertou a palavra.", "ok");
    return;
  }

  elWordGuessInput.value = "";
  wrongAttempt("Chute errado! Você perdeu 1 tentativa.", "word");
}

function resetInputs() {
  elLetterInput.value = "";
  elWordGuessInput.value = "";
  elLetterInput.disabled = false;
  elWordGuessInput.disabled = false;
  elLetterForm.querySelector("button[type='submit']").disabled = false;
  elWordForm.querySelector("button[type='submit']").disabled = false;
}

function newGame() {
  secret = pickWord();
  revealed = secret.split("").map((ch) => ch === " ");
  used = new Map();
  errors = 0;
  locked = false;
  wordGuessMode = false;
  attempts = 0;

  elMaxErrors.textContent = String(MAX_ERRORS);
  resetInputs();
  renderHangman();
  renderWord();
  renderUsed();
  renderKeyboard();
  updateStats();
  setStatus("Novo jogo iniciado. Boa sorte!", "neutral");

  elLetterInput.focus();
}

function setActiveTab(tab) {
  for (const b of tabButtons) {
    b.classList.toggle("is-active", b.dataset.tab === tab);
  }
  if (secHangman) secHangman.classList.toggle("hidden", tab !== "hangman");
  if (secCasino) secCasino.classList.toggle("hidden", tab !== "casino");
  if (secShop) secShop.classList.toggle("hidden", tab !== "shop");
}

for (const b of tabButtons) {
  b.addEventListener("click", () => setActiveTab(b.dataset.tab));
}

// ---------- Cassino ----------
function parseBet(raw) {
  const n = Math.floor(Number(String(raw).replace(/[^\d]/g, "")));
  return Number.isFinite(n) ? n : 0;
}

function canBet(bet) {
  if (!bet || bet <= 0) return { ok: false, msg: "Digite uma aposta válida." };
  if (bet > getPoints()) return { ok: false, msg: "Você não tem pontos suficientes." };
  return { ok: true, msg: "" };
}

// Slot
const SLOT_SYMBOLS = ["🍒", "🍋", "🍇", "⭐", "🔔"];
const SLOT_MULT = {
  "⭐": 10,
  "🍒": 6,
  "🍇": 5,
  "🍋": 4,
  "🔔": 8,
};

function slotSpinOnce() {
  return SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)];
}

function slotPayout(reels) {
  const [a, b, c] = reels;
  if (a === b && b === c) return SLOT_MULT[a] ?? 4;
  if (a === b || b === c || a === c) return 2;
  return 0;
}

let slotBusy = false;

function slotSetReels(reels) {
  if (!elSlotReels) return;
  const spans = Array.from(elSlotReels.querySelectorAll(".reel"));
  if (spans.length === 3) {
    spans[0].textContent = reels[0];
    spans[1].textContent = reels[1];
    spans[2].textContent = reels[2];
  } else {
    elSlotReels.textContent = reels.join(" ");
  }
}

btnSlotSpin?.addEventListener("click", () => {
  if (slotBusy) return;
  const bet = parseBet(elSlotBet?.value);
  const chk = canBet(bet);
  if (!chk.ok) {
    if (elSlotMsg) elSlotMsg.textContent = chk.msg;
    return;
  }

  slotBusy = true;
  btnSlotSpin.disabled = true;

  addPoints(-bet);
  if (elSlotMsg) elSlotMsg.textContent = "Girando...";
  elSlotReels?.classList.add("is-spinning");
  elSlotReels?.classList.remove("is-settle");

  const start = Date.now();
  const duration = 1100;
  const tickMs = 70;

  const interval = setInterval(() => {
    const tmp = [slotSpinOnce(), slotSpinOnce(), slotSpinOnce()];
    slotSetReels(tmp);

    if (Date.now() - start >= duration) {
      clearInterval(interval);

      const reels = [slotSpinOnce(), slotSpinOnce(), slotSpinOnce()];
      slotSetReels(reels);

      elSlotReels?.classList.remove("is-spinning");
      elSlotReels?.classList.add("is-settle");
      window.setTimeout(() => elSlotReels?.classList.remove("is-settle"), 260);

      const mult = slotPayout(reels);
      if (mult > 0) {
        const win = bet * mult;
        addPoints(win);
        if (elSlotMsg) elSlotMsg.textContent = `Você ganhou ${win} pontos (x${mult}).`;
      } else {
        if (elSlotMsg) elSlotMsg.textContent = `Nada feito. Você perdeu ${bet} pontos.`;
      }

      slotBusy = false;
      btnSlotSpin.disabled = false;
    }
  }, tickMs);
});

// Blackjack
let bjState = null;

function makeDeck() {
  const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const suits = ["♠", "♥", "♦", "♣"];
  const deck = [];
  for (const r of ranks) for (const s of suits) deck.push({ r, s });
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function cardValue(r) {
  if (r === "A") return 11;
  if (["K", "Q", "J"].includes(r)) return 10;
  return Number(r);
}

function handScore(hand) {
  let total = 0;
  let aces = 0;
  for (const c of hand) {
    total += cardValue(c.r);
    if (c.r === "A") aces += 1;
  }
  while (total > 21 && aces > 0) {
    total -= 10;
    aces -= 1;
  }
  return total;
}

function handToText(hand, hideSecond = false) {
  if (!hand || hand.length === 0) return "-";
  return hand
    .map((c, idx) => (hideSecond && idx === 1 ? "??" : `${c.r}${c.s}`))
    .join(" ");
}

function bjRender(final = false) {
  if (!bjState) return;
  const hideDealer = !final && bjState.inRound;
  if (elBjDealer) elBjDealer.textContent = handToText(bjState.dealer, hideDealer);
  if (elBjPlayer) elBjPlayer.textContent = handToText(bjState.player, false);

  const pScore = handScore(bjState.player);
  const dScore = hideDealer ? cardValue(bjState.dealer[0].r) : handScore(bjState.dealer);
  if (elBjPlayerScore) elBjPlayerScore.textContent = `Pontos: ${pScore}`;
  if (elBjDealerScore) elBjDealerScore.textContent = `Pontos: ${dScore}${hideDealer ? " (parcial)" : ""}`;
}

function bjSetMsg(msg) {
  if (elBjMsg) elBjMsg.textContent = msg;
}

function bjEndRound(outcome) {
  // outcome: "win" | "loss" | "push" | "blackjack"
  const bet = bjState.bet;
  const dealerScore = handScore(bjState.dealer);
  const playerScore = handScore(bjState.player);
  bjState.inRound = false;
  btnBjHit.disabled = true;
  btnBjStand.disabled = true;

  bjRender(true);

  if (outcome === "push") {
    addPoints(bet);
    bjSetMsg(`Empate. Você recuperou ${bet} pontos. (${playerScore} vs ${dealerScore})`);
    return;
  }

  if (outcome === "blackjack") {
    const win = Math.floor(bet * 2.5);
    addPoints(win);
    bjSetMsg(`Blackjack! Você ganhou ${win} pontos.`);
    return;
  }

  if (outcome === "win") {
    const win = bet * 2;
    addPoints(win);
    bjSetMsg(`Você ganhou ${win} pontos! (${playerScore} vs ${dealerScore})`);
    return;
  }

  bjSetMsg(`Você perdeu ${bet} pontos. (${playerScore} vs ${dealerScore})`);
}

btnBjDeal?.addEventListener("click", () => {
  const bet = parseBet(elBjBet?.value);
  const chk = canBet(bet);
  if (!chk.ok) {
    bjSetMsg(chk.msg);
    return;
  }

  addPoints(-bet);
  bjState = { inRound: true, bet, deck: makeDeck(), player: [], dealer: [] };
  bjState.player.push(bjState.deck.pop(), bjState.deck.pop());
  bjState.dealer.push(bjState.deck.pop(), bjState.deck.pop());

  btnBjHit.disabled = false;
  btnBjStand.disabled = false;
  bjSetMsg("Cartas dadas. Sua vez.");
  bjRender(false);

  const pScore = handScore(bjState.player);
  const dScore = handScore(bjState.dealer);
  if (pScore === 21 && dScore === 21) bjEndRound("push");
  else if (pScore === 21) bjEndRound("blackjack");
});

btnBjHit?.addEventListener("click", () => {
  if (!bjState?.inRound) return;
  bjState.player.push(bjState.deck.pop());
  bjRender(false);
  const pScore = handScore(bjState.player);
  if (pScore > 21) bjEndRound("loss");
});

btnBjStand?.addEventListener("click", () => {
  if (!bjState?.inRound) return;
  while (handScore(bjState.dealer) < 17) {
    bjState.dealer.push(bjState.deck.pop());
  }
  const p = handScore(bjState.player);
  const d = handScore(bjState.dealer);
  if (d > 21) bjEndRound("win");
  else if (p > d) bjEndRound("win");
  else if (p === d) bjEndRound("push");
  else bjEndRound("loss");
});

// Roleta
const ROULETTE_RED = new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]);

function rouletteColor(n) {
  if (n === 0) return "verde";
  return ROULETTE_RED.has(n) ? "vermelho" : "preto";
}

btnRoulSpin?.addEventListener("click", () => {
  const bet = parseBet(elRoulBet?.value);
  const chk = canBet(bet);
  if (!chk.ok) {
    if (elRoulMsg) elRoulMsg.textContent = chk.msg;
    return;
  }

  const type = elRoulType?.value || "parity";
  const bonusColor = normalizeText(elRoulColor?.value || ""); // "", "VERMELHO", "PRETO"

  addPoints(-bet);

  const n = Math.floor(Math.random() * 37);
  const color = rouletteColor(n);
  const parity = n === 0 ? "zero" : n % 2 === 0 ? "par" : "impar";
  if (elRouletteResult) elRouletteResult.textContent = `Resultado: ${n} (${color}, ${parity})`;

  let mainOk = false;
  let mainMult = 0;
  let mainLabel = "";

  if (type === "number") {
    const wanted = parseBet(elRoulNumber?.value);
    mainLabel = `número ${wanted}`;
    if (Number.isFinite(wanted) && wanted >= 0 && wanted <= 36 && wanted === n) {
      mainOk = true;
      mainMult = 36;
    }
  } else {
    const wanted = normalizeText(elRoulParity?.value || "");
    const normalizedWanted = wanted === "IMPAR" || wanted === "ÍMPAR" ? "impar" : wanted === "PAR" ? "par" : "";
    mainLabel = normalizedWanted ? (normalizedWanted === "par" ? "par" : "ímpar") : "par/ímpar";
    if (normalizedWanted && normalizedWanted === parity) {
      mainOk = true;
      mainMult = 2;
    }
  }

  const bonusWanted = bonusColor === "VERMELHO" ? "vermelho" : bonusColor === "PRETO" ? "preto" : "";
  const colorOk = bonusWanted ? bonusWanted === color : false;

  // Regras:
  // - acertou main + cor => paga mais (dobro do multiplicador principal)
  // - acertou só 1 (main OU cor) => devolve aposta (push)
  // - errou ambos => perde
  if (mainOk && bonusWanted && colorOk) {
    const winMult = mainMult * 2;
    const win = bet * winMult;
    addPoints(win);
    if (elRoulMsg) elRoulMsg.textContent = `Perfeito! Você ganhou ${win} pontos (x${winMult}).`;
    return;
  }

  if ((mainOk && !bonusWanted) || (mainOk && bonusWanted && !colorOk) || (!mainOk && colorOk)) {
    addPoints(bet);
    if (elRoulMsg) elRoulMsg.textContent = `Meio certo: aposta devolvida (${bet} pts).`;
    return;
  }

  if (elRoulMsg) elRoulMsg.textContent = `Você perdeu ${bet} pontos.`;
});

function renderRouletteInputs() {
  const type = elRoulType?.value || "parity";
  const isNumber = type === "number";
  if (elRoulNumber) elRoulNumber.classList.toggle("hidden", !isNumber);
  if (elRoulParity) elRoulParity.classList.toggle("hidden", isNumber);
}

elRoulType?.addEventListener("change", () => {
  renderRouletteInputs();
  if (elRoulMsg) elRoulMsg.textContent = "";
});

// ---------- Loja / customizações ----------
const SHOP_ITEMS = [
  {
    id: "bg_patrick",
    name: "Fundo: Patrick",
    desc: "Plano de fundo com ilustração colorida.",
    cost: 500,
    type: "bg",
    value: "./assets/patrick.png",
  },
  {
    id: "bg_yuri",
    name: "Fundo: Yuri",
    desc: "Fundo festivo para a página principal.",
    cost: 400,
    type: "bg",
    value: "./assets/yuri.png",
  },
  {
    id: "bg_malzedong",
    name: "Fundo: Meme",
    desc: "Fundo em preto e branco estilo foto.",
    cost: 350,
    type: "bg",
    value: "./assets/malzedong.png",
  },
];

function isOwned(id) {
  return loadProfile().owned.includes(id);
}

function setActiveBg(value) {
  const p = loadProfile();
  p.activeBg = value;
  saveProfile(p);
  applyCosmetics();
  renderShop();
}

function applyCosmetics() {
  const p = loadProfile();
  if (p.activeBg) {
    document.documentElement.style.setProperty("--custom-bg", `url("${p.activeBg}")`);
  } else {
    document.documentElement.style.setProperty("--custom-bg", "none");
  }
}

function buyItem(itemId) {
  const p = loadProfile();
  if (p.owned.includes(itemId)) return true;
  const item = SHOP_ITEMS.find((i) => i.id === itemId);
  if (!item) return false;
  if (p.points < item.cost) return false;
  p.points -= item.cost;
  p.owned.push(itemId);
  saveProfile(p);
  renderPoints();
  renderShop();
  return true;
}

function renderShop() {
  if (!elShopGrid) return;
  const p = loadProfile();
  elShopGrid.innerHTML = "";

  for (const item of SHOP_ITEMS) {
    const owned = p.owned.includes(item.id);
    const applied = item.type === "bg" && p.activeBg === item.value;

    const wrap = document.createElement("div");
    wrap.className = "shop-item";

    const img = document.createElement("div");
    img.className = "shop-img";
    img.style.backgroundImage = `url("${item.value}")`;
    wrap.appendChild(img);

    const body = document.createElement("div");
    body.className = "shop-body";

    const name = document.createElement("h3");
    name.className = "shop-name";
    name.textContent = item.name;
    body.appendChild(name);

    const desc = document.createElement("p");
    desc.className = "shop-desc";
    desc.textContent = item.desc;
    body.appendChild(desc);

    const actions = document.createElement("div");
    actions.className = "shop-actions";

    const price = document.createElement("div");
    price.className = "price";
    price.textContent = owned ? "Comprado" : `${item.cost} pts`;
    actions.appendChild(price);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `btn ${owned ? "btn-secondary" : ""}`;
    btn.textContent = owned ? (applied ? "Aplicado" : "Aplicar") : "Comprar";
    btn.disabled = owned ? applied : item.cost > p.points;

    btn.addEventListener("click", () => {
      if (!owned) {
        const ok = buyItem(item.id);
        if (ok) setStatus(`Você comprou: ${item.name}`, "ok");
        else setStatus("Pontos insuficientes para comprar.", "bad");
        return;
      }
      if (item.type === "bg") {
        setActiveBg(item.value);
        setStatus(`Customização aplicada: ${item.name}`, "ok");
      }
    });

    actions.appendChild(btn);
    body.appendChild(actions);
    wrap.appendChild(body);
    elShopGrid.appendChild(wrap);
  }
}

// Eventos
elLetterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const v = elLetterInput.value;
  elLetterInput.value = "";
  handleLetterGuess(v);
});

elWordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleWordGuess(elWordGuessInput.value);
});

elLetterInput.addEventListener("input", () => {
  const v = normalizeText(elLetterInput.value);
  // mantém sempre a última letra digitada visível
  elLetterInput.value = v.slice(-1);
});

elWordGuessInput.addEventListener("focus", () => setWordGuessMode(true));
elWordGuessInput.addEventListener("blur", () => setWordGuessMode(false));

btnNewGame.addEventListener("click", newGame);

btnClearUsed.addEventListener("click", () => {
  if (locked) return;
  used = new Map();
  renderUsed();
  renderKeyboard();
  setStatus("Letras usadas limpas (a palavra continua a mesma).", "neutral");
  elLetterInput.focus();
});

btnResetStats?.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  renderHistory();
  setStatus("Estatísticas zeradas.", "neutral");
});

btnResetCosmetics?.addEventListener("click", () => {
  const p = loadProfile();
  p.activeBg = null;
  saveProfile(p);
  applyCosmetics();
  renderShop();
  setStatus("Aparência resetada.", "neutral");
});

window.addEventListener("keydown", (e) => {
  if (locked) return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (document.activeElement === elWordGuessInput) return;
  if (wordGuessMode) return;

  const k = normalizeText(e.key);
  if (/^[A-Z]$/.test(k)) {
    if (document.activeElement === elLetterInput) {
      elLetterInput.value = k;
    }
    handleLetterGuess(k);
  }
});

// Iniciar
newGame();
renderHistory();
renderPoints();
applyCosmetics();
renderShop();
setActiveTab("hangman");
renderRouletteInputs();


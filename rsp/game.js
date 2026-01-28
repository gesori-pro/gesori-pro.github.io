import { db, ref, set, onValue, update, get, remove } from './fire.js';

// State
let currentRoomId = null;
let myRole = null;
let myCards = [];
let isAnimating = false;
const MAX_ROUNDS = 3;

// Elements
const screens = { lobby: document.getElementById('lobby-screen'), game: document.getElementById('game-screen') };
const uiOpponentHand = document.getElementById('opponent-hand');
const uiMyHand = document.getElementById('choice-buttons');
const uiBattleOverlay = document.getElementById('battle-overlay');
const uiBattleStage = document.getElementById('battle-stage');
const uiBattleResult = document.getElementById('battle-result');
const uiFinalScreen = document.getElementById('final-screen');

// --- BUTTONS ---

// 1. Quick Match
const btnQuick = document.getElementById('btn-quick-match');
if (btnQuick) {
    btnQuick.addEventListener('click', () => {
        const roomsRef = ref(db, 'rooms');
        get(roomsRef).then((snapshot) => {
            let matchFound = null;
            if (snapshot.exists()) {
                snapshot.forEach((child) => {
                    const room = child.val();
                    if (room.p2 === 'waiting' && room.status !== 'finished') {
                        matchFound = child.key;
                        return true;
                    }
                });
            }
            if (matchFound) joinRoom(matchFound);
            else createRoom();
        });
    });
}

// 2. Create/Join Manual
document.getElementById('btn-create').addEventListener('click', createRoom);
document.getElementById('btn-join').addEventListener('click', () => {
    const code = document.getElementById('join-code').value;
    if (code) joinRoom(code);
});
document.getElementById('btn-exit').addEventListener('click', () => location.reload());
document.getElementById('btn-lobby').addEventListener('click', () => location.reload());

// --- ROOM LOGIC ---

function createRoom() {
    const roomId = Math.floor(1000 + Math.random() * 9000).toString();
    const roomRef = ref(db, 'rooms/' + roomId);
    set(roomRef, {
        p1: 'joined', p2: 'waiting', status: 'waiting', round: 1, scores: { p1: 0, p2: 0 },
        p1Hand: [], p2Hand: [], p1Choice: '', p2Choice: ''
    }).then(() => enterGame(roomId, 'p1'));
}

function joinRoom(roomId) {
    const roomRef = ref(db, 'rooms/' + roomId);
    get(roomRef).then((snap) => {
        if (snap.exists() && snap.val().p2 === 'waiting') {
            update(roomRef, { p2: 'joined', status: 'playing' });
            enterGame(roomId, 'p2');
        } else {
            alert("Room full or invalid");
        }
    });
}

function enterGame(roomId, role) {
    currentRoomId = roomId;
    myRole = role;

    screens.lobby.style.display = 'none';
    screens.game.style.display = 'flex';
    screens.game.classList.add('active');

    document.getElementById('current-room-code').innerText = roomId;
    const roleBadge = document.getElementById('my-role');
    roleBadge.innerText = role === 'p1' ? "PLAYER 1" : "PLAYER 2";
    roleBadge.style.color = role === 'p1' ? 'var(--primary)' : 'var(--secondary)';

    onValue(ref(db, 'rooms/' + roomId), (snap) => {
        const data = snap.val();
        if (!data) { alert("Room closed"); location.reload(); return; }
        updateGame(data);
    });
}

// --- GAME LOOP ---

function updateGame(data) {
    if (data.status === 'finished') {
        showFinalResult(data);
        return;
    }

    // 1. Generate Hands (Host Only)
    if (myRole === 'p1' && data.status === 'playing' && (!data.p1Hand || data.p1Hand.length === 0)) {
        if (!isAnimating) {
            const h1 = generateHand();
            const h2 = generateHand();
            update(ref(db, 'rooms/' + currentRoomId), { p1Hand: h1, p2Hand: h2 });
        }
    }

    // 2. Info
    document.getElementById('round-display').innerText = `ROUND ${data.round} / ${MAX_ROUNDS}`;
    document.getElementById('score-display').innerText = `P1: ${data.scores.p1} - P2: ${data.scores.p2}`;

    const opponentRole = myRole === 'p1' ? 'p2' : 'p1';
    const statusEl = document.getElementById('opponent-status');
    statusEl.innerText = data[opponentRole] === 'joined' ? "READY" : "WAITING...";
    statusEl.style.color = data[opponentRole] === 'joined' ? "#0f0" : "#888";

    // 3. Render Hands (Only if not animating)
    if (!isAnimating) {
        renderOpponentHand(data[opponentRole + 'Choice']);
        if (data[myRole + 'Hand']) renderMyHand(data[myRole + 'Hand'], data[myRole + 'Choice']);
    }

    // 4. Check Battle Trigger
    if (!isAnimating && data.p1Choice && data.p2Choice) {
        playBattleAnimation(data);
    }
}

function generateHand() {
    const types = ['rock', 'paper', 'scissors'];
    if (Math.random() < 0.9) return shuffle(['rock', 'paper', 'scissors']);

    const d = types[Math.floor(Math.random() * 3)];
    let s = types[Math.floor(Math.random() * 3)];
    while (s === d) s = types[Math.floor(Math.random() * 3)];
    return shuffle([d, d, s]);
}
function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }

function renderOpponentHand(choice) {
    uiOpponentHand.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const div = document.createElement('div');
        div.className = 'game-card opp-card';
        if (choice) div.classList.add('ready');
        div.innerHTML = `<div class="card-face card-front"></div><div class="card-face card-back"></div>`;
        uiOpponentHand.appendChild(div);
    }
}

function renderMyHand(hand, myChoice) {
    uiMyHand.innerHTML = '';
    myCards = hand;

    hand.forEach(type => {
        const div = document.createElement('div');
        div.className = 'game-card my-card';
        if (myChoice) div.classList.add('disabled');
        if (myChoice === type) div.classList.add('selected');

        div.innerHTML = `<div class="card-face card-front">${getIcon(type)}</div><div class="card-face card-back"></div>`;
        if (!myChoice) {
            div.addEventListener('click', () => submitChoice(type));
        }
        uiMyHand.appendChild(div);
    });
}

function submitChoice(type) {
    if (!currentRoomId) return;
    update(ref(db, 'rooms/' + currentRoomId), { [myRole + 'Choice']: type });
}

function getIcon(t) { return t === 'rock' ? '✊' : (t === 'paper' ? '✋' : '✌️'); }

// --- ANIMATION ---

function playBattleAnimation(data) {
    isAnimating = true;
    uiBattleOverlay.classList.remove('hidden');
    uiBattleStage.innerHTML = '';
    uiBattleResult.className = '';
    uiBattleResult.classList.remove('show');

    const myType = data[myRole + 'Choice'];
    const oppType = data[(myRole === 'p1' ? 'p2' : 'p1') + 'Choice'];

    const cardMine = createBattleCard(myType, 'card-p1-start');
    const cardOpp = createBattleCard(oppType, 'card-p2-start');
    cardOpp.classList.add('opp-card');

    uiBattleStage.appendChild(cardOpp);
    uiBattleStage.appendChild(cardMine);

    setTimeout(() => {
        cardMine.className = 'game-card battle-card card-p1-mid';
        cardMine.innerHTML = `<div class="card-face card-front" style="background:#003333; border-color:var(--primary);">${getIcon(myType)}</div>`;
        cardOpp.className = 'game-card battle-card card-p2-mid opp-card';
    }, 100);

    setTimeout(() => {
        cardOpp.classList.add('card-p2-reveal');
        cardOpp.innerHTML = `<div class="card-face card-front" style="background:#330011; border-color:var(--secondary);">${getIcon(oppType)}</div><div class="card-face card-back"></div>`;
    }, 1000);

    setTimeout(() => {
        const winner = determineWinner(data.p1Choice, data.p2Choice);
        let text = "DRAW";
        let colorClass = "draw-text";
        if (winner === myRole) { text = "WIN!"; colorClass = "win-text"; }
        else if (winner !== 'draw') { text = "LOSE"; colorClass = "lose-text"; }

        uiBattleResult.innerText = text;
        uiBattleResult.classList.add(colorClass);
        uiBattleResult.classList.add('show');

        if (myRole === 'p1') {
            setTimeout(() => nextRound(winner, data), 1500);
        }
    }, 1800);
}

function createBattleCard(type, startClass) {
    const div = document.createElement('div');
    div.className = `game-card battle-card ${startClass}`;
    return div;
}

function determineWinner(p1, p2) {
    if (p1 === p2) return 'draw';
    if ((p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock') || (p1 === 'scissors' && p2 === 'paper')) return 'p1';
    return 'p2';
}

function nextRound(winner, data) {
    let nextR = data.round + 1;
    let scores = data.scores;
    if (winner === 'p1') scores.p1++;
    if (winner === 'p2') scores.p2++;

    const updates = {};
    updates['scores'] = scores;

    if (nextR > MAX_ROUNDS) {
        updates['status'] = 'finished';
        updates['finalWinner'] = scores.p1 > scores.p2 ? 'p1' : (scores.p2 > scores.p1 ? 'p2' : 'draw');
    } else {
        updates['round'] = nextR;
        updates['p1Choice'] = ''; updates['p2Choice'] = '';
        updates['p1Hand'] = []; updates['p2Hand'] = [];
    }
    update(ref(db, 'rooms/' + currentRoomId), updates);
}

function showFinalResult(data) {
    uiBattleOverlay.classList.add('hidden');
    screens.game.style.display = 'none';
    uiFinalScreen.classList.remove('hidden');

    const meWin = (data.finalWinner === myRole);
    const draw = (data.finalWinner === 'draw');
    const title = document.getElementById('final-msg');

    if (draw) { title.innerText = "DRAW GAME"; title.style.color = "#fff"; }
    else if (meWin) { title.innerText = "VICTORY!"; title.style.color = "var(--primary)"; }
    else { title.innerText = "DEFEAT"; title.style.color = "var(--secondary)"; }

    document.getElementById('final-score').innerText = `Final Score: ${data.scores.p1} - ${data.scores.p2}`;
    isAnimating = false;
}

import { db, ref, set, onValue, update, get, child } from './fire.js';

// Game State
let currentRoomId = null;
let myRole = null; // 'p1' or 'p2'
let myChoice = null;
let currentRound = 1;
const MAX_ROUNDS = 3;

// DOM Elements
const screens = {
    lobby: document.getElementById('lobby-screen'),
    game: document.getElementById('game-screen')
};
const btnCreate = document.getElementById('btn-create');
const btnJoin = document.getElementById('btn-join');
const inputJoinCode = document.getElementById('join-code');
const statusText = document.getElementById('status-text');

const uiRoomCode = document.getElementById('current-room-code');
const uiRole = document.getElementById('my-role');
const uiOpponentStatus = document.getElementById('opponent-status');
const uiResultOverlay = document.getElementById('result-overlay');
const btnReset = document.getElementById('btn-reset'); // Used for Next Round
const btnExit = document.getElementById('btn-exit');

// New UI Elements for Card Game
const uiRound = document.getElementById('round-display'); // Need to add to HTML
const uiScore = document.getElementById('score-display'); // Need to add to HTML
const myHandContainer = document.getElementById('choice-buttons');
const opponentHandContainer = document.getElementById('opponent-hand'); // Need to add to HTML

// [LOBBY] Create Room
btnCreate.addEventListener('click', () => {
    const roomId = Math.floor(1000 + Math.random() * 9000).toString();
    const roomRef = ref(db, 'rooms/' + roomId);

    // Initial Room State
    const initialData = {
        p1: 'joined',
        p2: 'waiting',
        status: 'waiting',
        round: 1,
        scores: { p1: 0, p2: 0 },
        // Hands and Choices are empty initially
        p1Hand: [],
        p2Hand: [],
        p1Choice: '',
        p2Choice: ''
    };

    set(roomRef, initialData).then(() => {
        enterGame(roomId, 'p1');
    }).catch((err) => {
        showStatus("Error creating room: " + err.message);
    });
});

// [LOBBY] Join Room
btnJoin.addEventListener('click', () => {
    const roomId = inputJoinCode.value.trim();
    if (!roomId) {
        showStatus("Please enter a room code!");
        return;
    }

    const roomRef = ref(db, 'rooms/' + roomId);
    get(roomRef).then((snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            if (data.p2 === 'waiting') {
                update(roomRef, { p2: 'joined', status: 'playing' });
                enterGame(roomId, 'p2');
            } else {
                showStatus("Room full or invalid.");
            }
        } else {
            showStatus("Room not found!");
        }
    });
});

// [GAME] Logic
function enterGame(roomId, role) {
    currentRoomId = roomId;
    myRole = role;

    screens.lobby.classList.remove('active');
    screens.game.classList.add('active');

    uiRoomCode.innerText = roomId;
    uiRole.innerText = role.toUpperCase();
    uiRole.style.color = role === 'p1' ? 'var(--primary)' : 'var(--secondary)';

    // Listen to updates
    const roomRef = ref(db, 'rooms/' + roomId);
    onValue(roomRef, (snapshot) => {
        const data = snapshot.val();
        if (!data) return;
        updateGameUI(data);
    });
}

// Hand Generation Logic
function generateThreeCards() {
    const types = ['rock', 'paper', 'scissors'];
    // 90% chance: All different (Unique)
    // 10% chance: 2 Same, 1 Different
    // 0% chance: 3 Same

    const roll = Math.random();
    let hand = [];

    if (roll < 0.9) {
        // Unique: R, P, S
        hand = ['rock', 'paper', 'scissors'];
    } else {
        // 2 Duplicates
        const double = types[Math.floor(Math.random() * 3)];
        let single = types[Math.floor(Math.random() * 3)];
        // Ensure single is different from double (no 3 same)
        while (single === double) {
            single = types[Math.floor(Math.random() * 3)];
        }
        hand = [double, double, single];
    }

    // Shuffle the array visually
    for (let i = hand.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [hand[i], hand[j]] = [hand[j], hand[i]];
    }

    return hand;
}

function updateGameUI(data) {
    // 1. Host Logic: Generate Hands if Round Started but Hands Empty
    if (myRole === 'p1' && data.status === 'playing' && (!data.p1Hand || !data.p1Hand.length)) {
        // Generate for BOTH players to ensure fairness/sync
        const hand1 = generateThreeCards();
        const hand2 = generateThreeCards();

        update(ref(db, 'rooms/' + currentRoomId), {
            p1Hand: hand1,
            p2Hand: hand2
        });
    }

    // 2. Score & Round Info
    if (data.scores) {
        const p1s = data.scores.p1 || 0;
        const p2s = data.scores.p2 || 0;
        const round = data.round || 1;

        // Dynamically find or create these elements if missing (since we haven't updated HTML yet)
        let roundEl = document.getElementById('round-display');
        let scoreEl = document.getElementById('score-display');

        if (roundEl) roundEl.innerText = `ROUND ${round} / ${MAX_ROUNDS}`;
        if (scoreEl) scoreEl.innerText = `P1: ${p1s} - P2: ${p2s}`;
    }

    // 3. Render Opponent Hand (Hidden or Revealed)
    const opponentRole = myRole === 'p1' ? 'p2' : 'p1';
    renderOpponentCards(opponentRole, data);

    // 4. Render My Hand
    const myHand = data[myRole + 'Hand'];
    if (myHand) {
        renderMyCards(myHand, data[myRole + 'Choice']);
    }

    // 5. Check Result
    checkResult(data);
}

function renderOpponentCards(role, data) {
    let container = document.getElementById('opponent-hand');
    if (!container) return; // Should exist in new HTML

    container.innerHTML = '';

    // Opponent always has 3 cards visually? 
    // Or do we represent them holding 3 cards?
    // Let's show 3 Card Backs.

    const choice = data[role + 'Choice'];

    for (let i = 0; i < 3; i++) {
        const card = document.createElement('div');
        card.className = 'card-back';

        // If opponent Made a choice, maybe highlight one card?
        // Or simpler: Just show "Ready" status text.

        if (choice !== '') {
            card.className += ' ready';
        }

        container.appendChild(card);
    }
}

function renderMyCards(hand, myCurrentChoice) {
    myHandContainer.innerHTML = '';

    hand.forEach((type, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = getIcon(type);
        btn.dataset.choice = type;

        // If I already chose, disable all and highlight chosen
        if (myCurrentChoice !== '') {
            btn.disabled = true;
            if (myCurrentChoice === type) { // Logic issue: if duplicate cards?
                // We should probably track passing indices, but for simple RPS prototype,
                // we'll just highlight ALL matching types or the FIRST one?
                // Let's rely on "locked" state.
                // Better: Highlight only if it was THE clicked one?
                // We don't save index in DB, only value. So highlight all matching types.
                btn.classList.add('selected');
            } else {
                btn.style.opacity = '0.3';
            }
        } else {
            // Clickable
            btn.addEventListener('click', () => {
                selectCard(type);
            });
        }

        myHandContainer.appendChild(btn);
    });
}

function getIcon(type) {
    if (type === 'rock') return '✊';
    if (type === 'paper') return '✋';
    if (type === 'scissors') return '✌️';
    return '?';
}

function selectCard(type) {
    if (!currentRoomId || !myRole) return;

    const updates = {};
    updates['rooms/' + currentRoomId + '/' + myRole + 'Choice'] = type;
    update(ref(db), updates);
}

function checkResult(data) {
    if (data.p1Choice && data.p2Choice) {
        // Both Selected -> Show Winner
        const result = determineWinner(data.p1Choice, data.p2Choice);

        uiResultOverlay.classList.remove('hidden');
        uiResultOverlay.innerText = result === 'draw' ? "DRAW!" :
            (result === myRole ? "WIN!" : "LOSE!");

        // Only HOST (P1) handles Round Progression to avoid double count
        if (myRole === 'p1') {
            // Wait 3 seconds then Next Round
            if (!window.roundTimer) {
                window.roundTimer = setTimeout(() => {
                    nextRound(result, data);
                    window.roundTimer = null;
                }, 3000);
            }
        }
    } else {
        uiResultOverlay.classList.add('hidden');
    }
}

function determineWinner(p1, p2) {
    if (p1 === p2) return 'draw';
    if ((p1 === 'rock' && p2 === 'scissors') ||
        (p1 === 'paper' && p2 === 'rock') ||
        (p1 === 'scissors' && p2 === 'paper')) {
        return 'p1';
    }
    return 'p2';
}

function nextRound(roundWinner, data) {
    const updates = {};
    let newRound = data.round + 1;
    let scores = data.scores || { p1: 0, p2: 0 };

    if (roundWinner === 'p1') scores.p1++;
    if (roundWinner === 'p2') scores.p2++;

    updates['rooms/' + currentRoomId + '/scores'] = scores;

    if (newRound > MAX_ROUNDS) {
        // Game Over
        updates['rooms/' + currentRoomId + '/status'] = 'finished';
        updates['rooms/' + currentRoomId + '/finalWinner'] = scores.p1 > scores.p2 ? 'p1' : (scores.p2 > scores.p1 ? 'p2' : 'draw');
    } else {
        // Next Round Setup
        updates['rooms/' + currentRoomId + '/round'] = newRound;
        updates['rooms/' + currentRoomId + '/p1Choice'] = '';
        updates['rooms/' + currentRoomId + '/p2Choice'] = '';
        updates['rooms/' + currentRoomId + '/p1Hand'] = []; // Clear to trigger regeneration
        updates['rooms/' + currentRoomId + '/p2Hand'] = [];
    }

    update(ref(db), updates);
}

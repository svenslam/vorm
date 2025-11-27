@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Open+Sans:wght@400;700&display=swap');

:root {
    --bg-color: #2c3e50;
    --p1-color: #3498db;
    --p2-color: #e74c3c;
    --card-bg: #ecf0f1;
    --timer-color: rgba(231, 76, 60, 0.4);
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: var(--bg-color);
    color: white;
    overflow: hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
}

/* --- Timer Achtergrond --- */
#timer-layer {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 0%;
    background-color: var(--timer-color);
    z-index: 0;
    transition: height 1s linear;
    pointer-events: none;
}

/* --- UI Layout --- */
#game-container {
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 800px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
}

#status-bar {
    background: rgba(0,0,0,0.3);
    padding: 10px;
    border-radius: 20px;
    text-align: center;
    margin-top: 10px;
    font-weight: bold;
    font-size: 1.1rem;
    min-height: 1.5em;
    animation: fadeIn 0.5s;
}

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

/* --- Spelers Gebieden --- */
.player-area {
    background: rgba(255,255,255,0.1);
    border-radius: 15px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
}

.active-turn {
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.4);
    background: rgba(255,255,255,0.25);
    border: 1px solid rgba(255,255,255,0.3);
}

.player-name {
    font-family: 'Fredoka One', cursive;
    font-size: 1.5rem;
    margin-bottom: 10px;
}
.p1-name { color: var(--p1-color); }
.p2-name { color: var(--p2-color); }

/* --- Kaarten en Handen --- */
.hand, .center-pot {
    display: flex;
    gap: 15px;
    justify-content: center;
    min-height: 110px;
    align-items: center;
}

.card {
    width: 70px;
    height: 100px;
    background-color: var(--card-bg);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
    position: relative;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0,0,0,0.4);
}

@keyframes popIn {
    0% { transform: scale(0); opacity: 0; }
    80% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
}
.card.new-entry {
    animation: popIn 0.4s ease-out forwards;
}

.card.disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    filter: grayscale(0.5);
}

/* --- Vormen --- */
.shape { width: 40px; height: 40px; }

/* Shape 0-3 (Bestaand) */
.shape-0 { background: #e74c3c; border-radius: 50%; box-shadow: inset 0 -3px 0 rgba(0,0,0,0.2); }
.shape-1 { background: #3498db; border-radius: 5px; box-shadow: inset 0 -3px 0 rgba(0,0,0,0.2); }
.shape-2 { background: #2ecc71; clip-path: polygon(50% 0%, 0% 100%, 100% 100%); height: 35px; }
.shape-3 { background: #f1c40f; clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); }

/* --- NIEUWE VORMEN --- */

/* Shape 4: Zeshoek (Paars) */
.shape-4 {
    background: #9b59b6;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

/* Shape 5: Plusteken (Oranje) - Gemaakt met pseudo-elementen */
.shape-5 {
    background: transparent;
    position: relative;
}
.shape-5::before, .shape-5::after {
    content: '';
    position: absolute;
    background: #e67e22;
    border-radius: 4px;
    box-shadow: inset 0 -2px 0 rgba(0,0,0,0.1);
}
.shape-5::before {
    width: 100%; height: 12px;
    top: 50%; left: 0;
    transform: translateY(-50%);
}
.shape-5::after {
    height: 100%; width: 12px;
    left: 50%; top: 0;
    transform: translateX(-50%);
}


/* --- Midden Gebied --- */
#center-area {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.pot-label {
    font-size: 0.9rem; font-weight: bold; opacity: 0.9;
    text-transform: uppercase; letter-spacing: 2px;
}

/* --- Overlay --- */
#overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.9);
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

button {
    padding: 15px 30px;
    font-size: 1.2rem;
    background: #27ae60;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-family: 'Fredoka One', cursive;
    transition: transform 0.2s;
    margin-top: 20px;
}
button:hover { transform: scale(1.1); background: #2ecc71; }
.hidden { display: none !important; }

.win-anim { animation: celebrate 0.5s infinite; color: #f1c40f; }
@keyframes celebrate { 0% { transform: scale(1); } 50% { transform: scale(1.2); } 100% { transform: scale(1); } }

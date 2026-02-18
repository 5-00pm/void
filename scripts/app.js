import * as MathData from '../questions/Math.js';
import * as BioData from '../questions/Biology.js';
import * as PhysData from '../questions/Physics.js';
import * as ChemData from '../questions/Chemistry.js';
import * as SatData from '../questions/SAT.js';
import * as EngData from '../questions/English.js';

import { QuizManager } from './quiz.js';
import { SessionTimer } from './timer.js';

// --- State ---
const state = {
    themes: ['light', 'dark', 'minimal', 'soft-paper', 'nordic'],
    currentThemeIdx: 0,
    config: { subject: null, grade: null, unit: null, time: 15 },
    quiz: null,
    timer: null,
    isInteracting: false // Lock UI during animations
};

// --- DOM Cache ---
const dom = {
    body: document.body,
    views: document.querySelectorAll('.view'),
    themeToggle: document.getElementById('theme-toggle'),
    themeLabel: document.getElementById('theme-label'),
    // Setup
    selSubject: document.getElementById('subject'),
    selGrade: document.getElementById('grade'),
    selUnit: document.getElementById('unit'),
    wrapGrade: document.getElementById('wrap-grade'),
    wrapUnit: document.getElementById('wrap-unit'),
    btnToTime: document.getElementById('btn-to-time'),
    btnStart: document.getElementById('btn-start'),
    inputTime: document.getElementById('time-input'),
    // Quiz
    qText: document.getElementById('q-text'),
    qMeta: document.getElementById('q-meta'),
    optionsGrid: document.getElementById('options-grid'),
    progressFill: document.getElementById('progress-fill'),
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    timerDisplay: document.getElementById('timer-display'),
    sessionInfo: document.getElementById('session-info'),
    // Results
    scoreVal: document.getElementById('score-val'),
    timeStat: document.getElementById('time-stat'),
    btnRestart: document.getElementById('btn-restart'),
    btnHome: document.getElementById('btn-home')
};

const dataMap = {
    'Math': MathData.hierarchy,
    'Physics': PhysData.hierarchy,
    'Biology': BioData.hierarchy,
    'Chemistry': ChemData.hierarchy,
    'SAT': SatData.hierarchy,
    'English': EngData.hierarchy
};

// --- Theme Logic ---
function initTheme() {
    const saved = localStorage.getItem('theme') || 'light';
    state.currentThemeIdx = state.themes.indexOf(saved);
    if (state.currentThemeIdx === -1) state.currentThemeIdx = 0;
    applyTheme();
}

function cycleTheme() {
    state.currentThemeIdx = (state.currentThemeIdx + 1) % state.themes.length;
    applyTheme();
}

function applyTheme() {
    const theme = state.themes[state.currentThemeIdx];
    dom.body.dataset.theme = theme;
    dom.themeLabel.textContent = theme.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    localStorage.setItem('theme', theme);
}

// --- View Navigation ---
function switchView(viewName) {
    dom.views.forEach(v => {
        v.classList.remove('active');
        if (v.dataset.view === viewName) v.classList.add('active');
    });
}

// --- Setup Workflow ---
function initSetup() {
    // Populate Subjects
    Object.keys(dataMap).forEach(sub => {
        dom.selSubject.add(new Option(sub, sub));
    });

    dom.selSubject.addEventListener('change', (e) => {
        state.config.subject = e.target.value;
        const hierarchy = dataMap[state.config.subject];
        
        // Reset Grade
        dom.selGrade.innerHTML = '<option value="" disabled selected>Select Grade</option>';
        Object.keys(hierarchy).forEach(g => dom.selGrade.add(new Option(g, g)));
        dom.selGrade.disabled = false;
        dom.wrapGrade.classList.remove('disabled');
        
        // Reset Unit
        dom.selUnit.innerHTML = '<option value="" disabled selected>Select Unit</option>';
        dom.selUnit.disabled = true;
        dom.wrapUnit.classList.add('disabled');
        dom.btnToTime.disabled = true;
    });

    dom.selGrade.addEventListener('change', (e) => {
        state.config.grade = e.target.value;
        const units = dataMap[state.config.subject][state.config.grade];

        dom.selUnit.innerHTML = '<option value="" disabled selected>Select Unit</option>';
        Object.keys(units).forEach(u => dom.selUnit.add(new Option(u, u)));
        dom.selUnit.disabled = false;
        dom.wrapUnit.classList.remove('disabled');
        dom.btnToTime.disabled = true;
    });

    dom.selUnit.addEventListener('change', (e) => {
        state.config.unit = e.target.value;
        dom.btnToTime.disabled = false;
    });

    dom.btnToTime.addEventListener('click', () => switchView('time'));

    dom.btnStart.addEventListener('click', () => {
        const val = parseInt(dom.inputTime.value);
        if (val >= 1 && val <= 10000) {
            state.config.time = val;
            startQuiz();
        }
    });
}

// --- Quiz Logic ---
function startQuiz() {
    // Fetch Questions
    const questions = dataMap[state.config.subject][state.config.grade][state.config.unit];
    
    // Initialize Managers
    state.quiz = new QuizManager(questions);
    state.timer = new SessionTimer(
        (time) => dom.timerDisplay.textContent = time,
        () => finishQuiz() // Time up
    );

    state.timer.start(state.config.time);
    dom.sessionInfo.classList.add('visible');
    
    switchView('quiz');
    renderQuestion();
}

function renderQuestion() {
    const q = state.quiz.getCurrentQuestion();
    const prog = state.quiz.getProgress();

    dom.qMeta.textContent = `Question ${prog.current} of ${prog.total}`;
    dom.qText.textContent = q.text;
    dom.progressFill.style.width = `${prog.percent}%`;
    
    // Check Navigation State
    dom.btnPrev.disabled = prog.current === 1;
    dom.btnNext.textContent = prog.current === prog.total ? 'Finish' : 'Next';

    // Render Options
    dom.optionsGrid.innerHTML = '';
    const keys = ['A', 'B', 'C', 'D'];
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="opt-key">${keys[idx]}</span> ${opt}`;
        
        // Accessibility
        btn.setAttribute('aria-label', `Option ${keys[idx]}: ${opt}`);
        
        btn.onclick = () => handleAnswer(btn, idx);
        dom.optionsGrid.appendChild(btn);
    });

    // Unlock interaction
    state.isInteracting = false;
}

function handleAnswer(btn, idx) {
    if (state.isInteracting) return;
    state.isInteracting = true; // Lock

    const result = state.quiz.submitAnswer(idx);
    const buttons = Array.from(dom.optionsGrid.children);

    // Disable all
    buttons.forEach(b => b.disabled = true);

    if (result.isCorrect) {
        btn.classList.add('correct');
    } else {
        btn.classList.add('wrong');
        // Highlight correct one
        buttons[result.correctIndex].classList.add('reveal');
    }
}

function finishQuiz() {
    state.timer.stop();
    const stats = state.quiz.getFinalStats();
    
    dom.scoreVal.textContent = `${stats.scorePercent}%`;
    dom.timeStat.textContent = `Time Focused: ${state.timer.getElapsedFormatted()} / Goal: ${state.config.time}m`;
    
    dom.sessionInfo.classList.remove('visible');
    switchView('results');
}

// --- Global Listeners ---
dom.themeToggle.addEventListener('click', cycleTheme);
dom.btnPrev.addEventListener('click', () => {
    if (state.quiz.prev()) renderQuestion();
});
dom.btnNext.addEventListener('click', () => {
    if (state.quiz.next()) renderQuestion();
    else finishQuiz();
});
dom.btnRestart.addEventListener('click', () => window.location.reload());
dom.btnHome.addEventListener('click', () => window.location.reload());

// Keyboard
document.addEventListener('keydown', (e) => {
    if (dom.views[2].classList.contains('active') && !state.isInteracting) {
        if (e.key === 'ArrowRight' || e.key === 'Enter') dom.btnNext.click();
        if (e.key === 'ArrowLeft' || e.key === 'Backspace') dom.btnPrev.click();
    }
});

// Init
initTheme();
initSetup();